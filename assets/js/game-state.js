/**
 * GameState - Centralized Runtime State Management for Trivia Jeopardy
 * Maintains temporary gameplay state completely isolated from published trivia content.
 */

const GameState = (function () {
  'use strict';

  const listeners = {};

  const DEFAULT_STATE = {
    status: 'idle', // 'idle', 'setup', 'playing', 'clue_active', 'clue_revealed', 'daily_double', 'final_jeopardy_wager', 'final_jeopardy_clue', 'final_jeopardy_results', 'finished'
    gameData: null, // Loaded questions.json structure
    currentRoundIndex: 0,
    currentClue: null,
    usedClueIds: [],
    activeRoundBoards: {}, // Sampled categories with 5 clues each per round index
    selectedCategoryIds: null, // Optional list of chosen category IDs for custom round selection
    teams: [
      { id: 'team-1', name: 'Team Alpha', score: 0, color: '#0d6efd' },
      { id: 'team-2', name: 'Team Bravo', score: 0, color: '#dc3545' }
    ],
    activeTeamId: 'team-1',
    dailyDoubleWager: 0,
    finalJeopardyWagers: {}, // { [teamId]: number }
    finalJeopardyResults: {}, // { [teamId]: boolean }
    settings: {
      title: 'Trivia Jeopardy',
      incorrectAnswerDeduction: false,
      requireQuestionForm: false,
      dailyDoubleEnabled: true,
      finalJeopardyEnabled: true,
      timerEnabled: true,
      timerSeconds: 30,
      soundEnabled: true
    },
    timerRemaining: 0,
    timerRunning: false,
    startTime: null,
    endTime: null,
    scoreHistory: []
  };

  let state = JSON.parse(JSON.stringify(DEFAULT_STATE));

  /**
   * Subscribe to state change events
   * @param {string} event
   * @param {Function} callback
   */
  function on(event, callback) {
    if (!listeners[event]) {
      listeners[event] = [];
    }
    listeners[event].push(callback);
    return () => off(event, callback);
  }

  /**
   * Unsubscribe from events
   * @param {string} event
   * @param {Function} callback
   */
  function off(event, callback) {
    if (!listeners[event]) return;
    listeners[event] = listeners[event].filter(cb => cb !== callback);
  }

  /**
   * Emit an event to all subscribers
   * @param {string} event
   * @param {any} data
   */
  function emit(event, data) {
    if (listeners[event]) {
      listeners[event].forEach(cb => {
        try {
          cb(data);
        } catch (e) {
          console.error(`Error in event listener for ${event}:`, e);
        }
      });
    }
  }

  /**
   * Get an immutable snapshot of current state
   * @returns {object}
   */
  function getState() {
    return JSON.parse(JSON.stringify(state));
  }

  /**
   * Update state partially and trigger relevant notifications
   * @param {object} partialState
   * @param {string} reason
   */
  function setState(partialState, reason = 'state_update') {
    state = { ...state, ...partialState };
    emit('change', { state: getState(), reason });
    if (partialState.status) emit('statusChange', state.status);
    if (partialState.currentClue !== undefined) emit('clueChange', state.currentClue);
    if (partialState.currentRoundIndex !== undefined) emit('roundChange', state.currentRoundIndex);
    if (partialState.activeTeamId) emit('activeTeamChange', state.activeTeamId);
  }

  /**
   * Reset game state to defaults
   */
  function resetGame() {
    const gameData = state.gameData;
    const settings = state.settings;
    state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    state.gameData = gameData;
    state.settings = { ...DEFAULT_STATE.settings, ...settings };
    emit('change', { state: getState(), reason: 'reset' });
    emit('reset', getState());
  }

  /**
   * Sets game trivia content
   * @param {object} questionsData
   */
  function setGameData(questionsData) {
    state.gameData = questionsData;
    if (questionsData.game && questionsData.game.title) {
      state.settings.title = questionsData.game.title;
    }
    if (questionsData.game && questionsData.game.settings) {
      state.settings = { ...state.settings, ...questionsData.game.settings };
    }
    emit('dataLoaded', questionsData);
  }

  /**
   * Helper to get active team object
   * @returns {object|null}
   */
  function getActiveTeam() {
    return state.teams.find(t => t.id === state.activeTeamId) || state.teams[0] || null;
  }

  /**
   * Samples 1 random clue per difficulty level (1 to 5) for categories with question pools
   * @param {object} rawRound
   * @returns {Array} Array of category objects with exactly 5 clues each
   */
  function sampleRoundCategories(rawRound) {
    if (!rawRound || !rawRound.categories) return [];
    const multiplier = rawRound.multiplier || 1;

    return rawRound.categories.map(cat => {
      const allClues = cat.clues || [];
      if (allClues.length <= 5) {
        return {
          id: cat.id,
          name: cat.name,
          clues: JSON.parse(JSON.stringify(allClues))
        };
      }

      // Category has a question pool (e.g. 100 questions, 20 per tier)
      const sampledClues = [];
      for (let d = 1; d <= 5; d++) {
        let tierClues = allClues.filter(c => c.difficulty === d);
        if (tierClues.length === 0) {
          const expectedPoints = d * 100 * multiplier;
          tierClues = allClues.filter(c => c.points === expectedPoints);
        }
        if (tierClues.length === 0) {
          tierClues = allClues;
        }

        const picked = tierClues[Math.floor(Math.random() * tierClues.length)];
        if (picked) {
          const clueCopy = JSON.parse(JSON.stringify(picked));
          // Ensure points match round multiplier
          clueCopy.points = d * 100 * multiplier;
          sampledClues.push(clueCopy);
        }
      }

      // Sort by points ascending
      sampledClues.sort((a, b) => a.points - b.points);

      return {
        id: cat.id,
        name: cat.name,
        clues: sampledClues
      };
    });
  }

  /**
   * Randomly assign Daily Doubles if none are active in the sampled board
   */
  function assignDailyDoubles(categories, count = 1) {
    const flatClues = [];
    categories.forEach(c => {
      if (c.clues) c.clues.forEach(cl => flatClues.push(cl));
    });
    if (flatClues.length === 0) return;

    const existingDD = flatClues.filter(c => c.dailyDouble);
    if (existingDD.length >= count) return;

    // Prefer tier 2-5 clues for Daily Double
    const candidates = flatClues.filter(c => (c.difficulty || 1) > 1 && !c.dailyDouble);
    const pool = candidates.length >= count ? candidates : flatClues;
    const needed = count - existingDD.length;
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    for (let i = 0; i < needed && i < shuffled.length; i++) {
      shuffled[i].dailyDouble = true;
    }
  }

  /**
   * Gets active sampled categories for a round index
   */
  function getActiveRoundCategories(roundIndex = state.currentRoundIndex, forceResample = false) {
    if (!state.activeRoundBoards) {
      state.activeRoundBoards = {};
    }

    if (!forceResample && state.activeRoundBoards[roundIndex] && state.activeRoundBoards[roundIndex].length > 0) {
      if (Array.isArray(state.selectedCategoryIds) && state.selectedCategoryIds.length > 0) {
        return state.activeRoundBoards[roundIndex].filter(c => state.selectedCategoryIds.includes(c.id));
      }
      return state.activeRoundBoards[roundIndex];
    }

    const rawRound = getRawCurrentRound(roundIndex);
    if (!rawRound) return [];

    const sampled = sampleRoundCategories(rawRound);
    const ddCount = (rawRound.multiplier && rawRound.multiplier > 1) ? 2 : 1;
    assignDailyDoubles(sampled, ddCount);

    state.activeRoundBoards[roundIndex] = sampled;

    if (Array.isArray(state.selectedCategoryIds) && state.selectedCategoryIds.length > 0) {
      return sampled.filter(c => state.selectedCategoryIds.includes(c.id));
    }
    return sampled;
  }

  function resampleRoundBoard(roundIndex = state.currentRoundIndex) {
    return getActiveRoundCategories(roundIndex, true);
  }

  function getRawCurrentRound(roundIndex = state.currentRoundIndex) {
    if (!state.gameData || !state.gameData.game || !state.gameData.game.rounds) return null;
    return state.gameData.game.rounds[roundIndex] || null;
  }

  /**
   * Helper to get current round object with active sampled categories
   * @returns {object|null}
   */
  function getCurrentRound() {
    const rawRound = getRawCurrentRound(state.currentRoundIndex);
    if (!rawRound) return null;
    return {
      ...rawRound,
      categories: getActiveRoundCategories(state.currentRoundIndex)
    };
  }

  /**
   * Checks if a clue has already been completed
   * @param {string} clueId
   * @returns {boolean}
   */
  function isClueCompleted(clueId) {
    return state.usedClueIds.includes(clueId);
  }

  /**
   * Marks a clue as completed
   * @param {string} clueId
   */
  function markClueCompleted(clueId) {
    if (!state.usedClueIds.includes(clueId)) {
      state.usedClueIds.push(clueId);
      emit('clueCompleted', clueId);
      emit('change', { state: getState(), reason: 'clue_completed' });
    }
  }

  /**
   * Checks if all clues in the current round are completed
   * @returns {boolean}
   */
  function isRoundCompleted() {
    const round = getCurrentRound();
    if (!round || !round.categories) return false;
    for (const cat of round.categories) {
      for (const clue of cat.clues) {
        if (!state.usedClueIds.includes(clue.id)) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * Count remaining clues in current round
   * @returns {number}
   */
  function getRemainingCluesCount() {
    const round = getCurrentRound();
    if (!round || !round.categories) return 0;
    let count = 0;
    for (const cat of round.categories) {
      for (const clue of cat.clues) {
        if (!state.usedClueIds.includes(clue.id)) {
          count++;
        }
      }
    }
    return count;
  }

  return {
    on,
    off,
    emit,
    getState,
    setState,
    resetGame,
    setGameData,
    getActiveTeam,
    getCurrentRound,
    getRawCurrentRound,
    getActiveRoundCategories,
    resampleRoundBoard,
    sampleRoundCategories,
    isClueCompleted,
    markClueCompleted,
    isRoundCompleted,
    getRemainingCluesCount
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GameState;
}
