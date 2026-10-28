/**
 * Scoring Module for Trivia Jeopardy
 * Centralizes all score adjustments, transaction logging, undo support, and duplicate prevention.
 */

const Scoring = (function () {
  'use strict';

  let isTransactionPending = false;

  /**
   * Generates a unique transaction identifier
   * @returns {string}
   */
  function generateTransactionId() {
    return 'tx_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
  }

  /**
   * Applies a score delta to a team and commits a transaction to history
   * @param {string} teamId
   * @param {number} delta Points to add (positive) or subtract (negative)
   * @param {string} reason Reason description (e.g. 'Correct answer', 'Incorrect penalty', 'Daily Double wager')
   * @param {string|null} clueId Associated clue ID
   * @returns {object|null} The recorded transaction or null if failed
   */
  function applyScoreChange(teamId, delta, reason, clueId = null) {
    if (isTransactionPending) {
      console.warn('Transaction rejected: another score update is in progress.');
      return null;
    }
    isTransactionPending = true;

    try {
      const state = GameState.getState();
      const teamIndex = state.teams.findIndex(t => t.id === teamId);

      if (teamIndex === -1) {
        console.error(`Team with id "${teamId}" not found.`);
        return null;
      }

      const team = state.teams[teamIndex];
      const previousScore = team.score;
      const numDelta = parseInt(delta, 10) || 0;
      const newScore = previousScore + numDelta;

      // Update team score in a new array copy
      const updatedTeams = [...state.teams];
      updatedTeams[teamIndex] = {
        ...team,
        score: newScore
      };

      const transaction = {
        id: generateTransactionId(),
        teamId: team.id,
        teamName: team.name,
        previousScore: previousScore,
        change: numDelta,
        newScore: newScore,
        reason: reason || 'Point adjustment',
        clueId: clueId || null,
        timestamp: new Date().toISOString()
      };

      const updatedHistory = [...(state.scoreHistory || []), transaction];

      GameState.setState({
        teams: updatedTeams,
        scoreHistory: updatedHistory
      }, 'score_change');

      GameState.emit('scoreTransaction', transaction);

      return transaction;
    } finally {
      isTransactionPending = false;
    }
  }

  /**
   * Undoes the most recent score transaction
   * @returns {object|null} The reversed transaction or null if history was empty
   */
  function undoLastTransaction() {
    const state = GameState.getState();
    const history = state.scoreHistory || [];

    if (history.length === 0) {
      return null;
    }

    const lastTx = history[history.length - 1];
    const teamIndex = state.teams.findIndex(t => t.id === lastTx.teamId);

    if (teamIndex === -1) {
      console.error('Cannot undo: team no longer exists.');
      return null;
    }

    const team = state.teams[teamIndex];
    const restoredScore = lastTx.previousScore;

    const updatedTeams = [...state.teams];
    updatedTeams[teamIndex] = {
      ...team,
      score: restoredScore
    };

    const updatedHistory = history.slice(0, history.length - 1);

    GameState.setState({
      teams: updatedTeams,
      scoreHistory: updatedHistory
    }, 'undo_transaction');

    GameState.emit('scoreUndo', {
      undoneTransaction: lastTx,
      restoredScore: restoredScore
    });

    return lastTx;
  }

  /**
   * Directly sets a team's score with transaction tracking
   * @param {string} teamId
   * @param {number} newScore
   * @param {string} reason
   * @returns {object|null}
   */
  function setTeamScore(teamId, newScore, reason = 'Host manual override') {
    const state = GameState.getState();
    const team = state.teams.find(t => t.id === teamId);
    if (!team) return null;

    const delta = newScore - team.score;
    return applyScoreChange(teamId, delta, reason, null);
  }

  /**
   * Returns copy of score transaction history
   * @returns {Array}
   */
  function getScoreHistory() {
    return GameState.getState().scoreHistory || [];
  }

  return {
    applyScoreChange,
    undoLastTransaction,
    setTeamScore,
    getScoreHistory
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Scoring;
}
