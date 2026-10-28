/**
 * Persistence Module for Trivia Jeopardy
 * Handles local storage persistence for session recovery, admin drafts, and theme preferences.
 */

const Persistence = (function () {
  'use strict';

  const STORAGE_KEYS = {
    SESSION: 'trivia_jeopardy_session_v1',
    ADMIN_DRAFT: 'trivia_jeopardy_admin_draft_v1',
    PREFERENCES: 'trivia_jeopardy_user_prefs_v1'
  };

  /**
   * Safe localStorage check
   * @returns {boolean}
   */
  function isStorageAvailable() {
    try {
      const test = '__trivia_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Saves active gameplay session to localStorage
   * @param {object} state
   */
  function saveSession(state) {
    if (!isStorageAvailable() || !state) return;
    try {
      // Store only relevant runtime state, do not duplicate raw question content if unmodified
      const sessionPayload = {
        timestamp: Date.now(),
        status: state.status,
        currentRoundIndex: state.currentRoundIndex,
        usedClueIds: state.usedClueIds || [],
        teams: state.teams || [],
        activeTeamId: state.activeTeamId,
        scoreHistory: state.scoreHistory || [],
        settings: state.settings || {},
        startTime: state.startTime,
        endTime: state.endTime
      };
      localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(sessionPayload));
    } catch (err) {
      console.warn('Could not save session to localStorage (storage quota may be full):', err);
    }
  }

  /**
   * Loads saved session from localStorage
   * @returns {object|null}
   */
  function loadSession() {
    if (!isStorageAvailable()) return null;
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.SESSION);
      if (!raw) return null;
      const data = JSON.parse(raw);
      // Validate schema
      if (!data || !Array.isArray(data.teams) || !Array.isArray(data.usedClueIds)) {
        console.warn('Invalid session format found in storage. Clearing.');
        clearSession();
        return null;
      }
      return data;
    } catch (err) {
      console.error('Error parsing saved session from storage:', err);
      clearSession();
      return null;
    }
  }

  /**
   * Checks whether a recoverable session exists
   * @returns {boolean}
   */
  function hasSavedSession() {
    const session = loadSession();
    return !!(session && session.teams && session.teams.length > 0 && session.usedClueIds.length > 0);
  }

  /**
   * Clears saved gameplay session
   */
  function clearSession() {
    if (!isStorageAvailable()) return;
    try {
      localStorage.removeItem(STORAGE_KEYS.SESSION);
    } catch (e) {}
  }

  /**
   * Saves unfinished admin editor draft
   * @param {object} draft
   */
  function saveAdminDraft(draft) {
    if (!isStorageAvailable() || !draft) return;
    try {
      const draftPayload = {
        updatedAt: new Date().toISOString(),
        game: draft.game
      };
      localStorage.setItem(STORAGE_KEYS.ADMIN_DRAFT, JSON.stringify(draftPayload));
    } catch (e) {
      console.warn('Failed to save admin draft:', e);
    }
  }

  /**
   * Loads admin editor draft
   * @returns {object|null}
   */
  function loadAdminDraft() {
    if (!isStorageAvailable()) return null;
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.ADMIN_DRAFT);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  /**
   * Clears admin draft
   */
  function clearAdminDraft() {
    if (!isStorageAvailable()) return;
    try {
      localStorage.removeItem(STORAGE_KEYS.ADMIN_DRAFT);
    } catch (e) {}
  }

  /**
   * Saves user UI preferences (e.g. theme: 'dark'|'light', soundEnabled: boolean)
   * @param {object} prefs
   */
  function savePreferences(prefs) {
    if (!isStorageAvailable()) return;
    try {
      const current = loadPreferences();
      localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify({ ...current, ...prefs }));
    } catch (e) {}
  }

  /**
   * Loads user UI preferences
   * @returns {object}
   */
  function loadPreferences() {
    if (!isStorageAvailable()) return { theme: 'dark', sound: true };
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
      return raw ? JSON.parse(raw) : { theme: 'dark', sound: true };
    } catch (e) {
      return { theme: 'dark', sound: true };
    }
  }

  return {
    isStorageAvailable,
    saveSession,
    loadSession,
    hasSavedSession,
    clearSession,
    saveAdminDraft,
    loadAdminDraft,
    clearAdminDraft,
    savePreferences,
    loadPreferences
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Persistence;
}
