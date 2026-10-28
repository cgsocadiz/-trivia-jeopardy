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
   * Helper to get current round object
   * @returns {object|null}
   */
  function getCurrentRound() {
    if (!state.gameData || !state.gameData.game || !state.gameData.game.rounds) return null;
    return state.gameData.game.rounds[state.currentRoundIndex] || null;
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
    isClueCompleted,
    markClueCompleted,
    isRoundCompleted,
    getRemainingCluesCount
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GameState;
}
