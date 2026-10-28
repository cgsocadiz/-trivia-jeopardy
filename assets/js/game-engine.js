/**
 * Game Engine for Trivia Jeopardy
 * Coordinates timers, procedural Web Audio sound synthesis, clue flow, daily doubles, and rounds.
 */

const GameEngine = (function () {
  'use strict';

  // --- Web Audio Synthesizer (Zero External Dependencies, 100% Original) ---
  let audioCtx = null;
  let isSoundMuted = false;

  function getAudioContext() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  }

  function playTone(freq, type = 'sine', duration = 0.2, gainLevel = 0.15) {
    if (isSoundMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(gainLevel, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio playback prevented or unsupported:', e);
    }
  }

  const SoundFX = {
    tileClick() {
      playTone(587.33, 'triangle', 0.12, 0.1); // D5
    },
    clueOpen() {
      try {
        const ctx = getAudioContext();
        if (!ctx || isSoundMuted) return;
        playTone(523.25, 'sine', 0.15, 0.12); // C5
        setTimeout(() => playTone(659.25, 'sine', 0.2, 0.12), 120); // E5
      } catch (e) {}
    },
    answerReveal() {
      try {
        const ctx = getAudioContext();
        if (!ctx || isSoundMuted) return;
        playTone(440, 'triangle', 0.15, 0.1);
        setTimeout(() => playTone(880, 'triangle', 0.25, 0.15), 140);
      } catch (e) {}
    },
    correct() {
      try {
        const ctx = getAudioContext();
        if (!ctx || isSoundMuted) return;
        playTone(523.25, 'triangle', 0.15, 0.15); // C5
        setTimeout(() => playTone(659.25, 'triangle', 0.15, 0.15), 100); // E5
        setTimeout(() => playTone(783.99, 'triangle', 0.35, 0.18), 200); // G5
        setTimeout(() => playTone(1046.50, 'triangle', 0.45, 0.2), 300); // C6
      } catch (e) {}
    },
    incorrect() {
      try {
        const ctx = getAudioContext();
        if (!ctx || isSoundMuted) return;
        playTone(180, 'sawtooth', 0.3, 0.18);
        setTimeout(() => playTone(130, 'sawtooth', 0.45, 0.2), 180);
      } catch (e) {}
    },
    timerTick() {
      playTone(900, 'square', 0.04, 0.04);
    },
    timerAlert() {
      playTone(850, 'sawtooth', 0.15, 0.12);
    },
    dailyDouble() {
      try {
        const ctx = getAudioContext();
        if (!ctx || isSoundMuted) return;
        const notes = [440, 554.37, 659.25, 880];
        notes.forEach((freq, i) => {
          setTimeout(() => playTone(freq, 'sawtooth', 0.25, 0.14), i * 110);
        });
      } catch (e) {}
    },
    victory() {
      try {
        const ctx = getAudioContext();
        if (!ctx || isSoundMuted) return;
        const chords = [523.25, 659.25, 783.99, 1046.50];
        chords.forEach((note, i) => {
          setTimeout(() => playTone(note, 'triangle', 0.5, 0.18), i * 140);
        });
      } catch (e) {}
    }
  };

  function setMuted(muted) {
    isSoundMuted = !!muted;
    GameState.setState({
      settings: { ...GameState.getState().settings, soundEnabled: !isSoundMuted }
    });
  }

  function toggleMute() {
    setMuted(!isSoundMuted);
    return isSoundMuted;
  }

  // --- Timer Management ---
  let timerInterval = null;

  function startTimer(durationSeconds, onTick, onComplete) {
    stopTimer();
    let remaining = durationSeconds;
    GameState.setState({ timerRemaining: remaining, timerRunning: true }, 'timer_start');

    if (typeof onTick === 'function') onTick(remaining);

    timerInterval = setInterval(() => {
      remaining -= 1;
      GameState.setState({ timerRemaining: remaining }, 'timer_tick');

      if (typeof onTick === 'function') onTick(remaining);

      if (remaining <= 5 && remaining > 0) {
        SoundFX.timerAlert();
      } else if (remaining > 5) {
        SoundFX.timerTick();
      }

      if (remaining <= 0) {
        stopTimer();
        if (typeof onComplete === 'function') onComplete();
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    GameState.setState({ timerRunning: false }, 'timer_stop');
  }

  function pauseTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    GameState.setState({ timerRunning: false }, 'timer_pause');
  }

  function resumeTimer(onTick, onComplete) {
    const remaining = GameState.getState().timerRemaining;
    if (remaining > 0) {
      startTimer(remaining, onTick, onComplete);
    }
  }

  // --- Clue Lifecycle ---
  function selectClue(clue, categoryName) {
    if (!clue || GameState.isClueCompleted(clue.id)) {
      return { allowed: false, reason: 'Clue has already been completed.' };
    }

    const state = GameState.getState();
    const isDailyDouble = !!(clue.dailyDouble && state.settings.dailyDoubleEnabled);

    const clueData = {
      ...clue,
      categoryName: categoryName || 'Category',
      isDailyDouble: isDailyDouble,
      revealed: false
    };

    if (isDailyDouble) {
      SoundFX.dailyDouble();
      GameState.setState({
        status: 'daily_double',
        currentClue: clueData,
        dailyDoubleWager: 0
      }, 'daily_double_selected');
      return { allowed: true, type: 'daily_double', clue: clueData };
    } else {
      SoundFX.clueOpen();
      GameState.setState({
        status: 'clue_active',
        currentClue: clueData
      }, 'clue_selected');
      return { allowed: true, type: 'standard', clue: clueData };
    }
  }

  function commitDailyDoubleWager(wagerAmount) {
    const state = GameState.getState();
    const activeTeam = GameState.getActiveTeam();
    const currentScore = activeTeam ? activeTeam.score : 0;
    const currentRound = GameState.getCurrentRound();
    const maxBoardValue = (currentRound && currentRound.multiplier === 2) ? 1000 : 500;
    const maxAllowed = Math.max(maxBoardValue, currentScore);

    const wager = parseInt(wagerAmount, 10);
    if (isNaN(wager) || wager < 5) {
      return { valid: false, error: 'Minimum wager is 5 points.' };
    }
    if (wager > maxAllowed) {
      return { valid: false, error: `Maximum wager for this team is $${maxAllowed.toLocaleString()}.` };
    }

    const currentClue = state.currentClue;
    currentClue.points = wager;

    GameState.setState({
      status: 'clue_active',
      dailyDoubleWager: wager,
      currentClue: currentClue
    }, 'daily_double_wager_committed');

    SoundFX.clueOpen();
    return { valid: true, wager };
  }

  function revealCurrentAnswer() {
    const state = GameState.getState();
    if (!state.currentClue) return;

    stopTimer();
    SoundFX.answerReveal();

    const updatedClue = { ...state.currentClue, revealed: true };
    GameState.setState({
      status: 'clue_revealed',
      currentClue: updatedClue
    }, 'answer_revealed');
  }

  function awardPoints(teamId, customPoints = null) {
    const state = GameState.getState();
    const clue = state.currentClue;
    if (!clue) return null;

    const points = customPoints !== null ? customPoints : clue.points;
    const team = state.teams.find(t => t.id === teamId) || GameState.getActiveTeam();
    if (!team) return null;

    const reason = clue.isDailyDouble ? `Daily Double: ${clue.categoryName}` : `Correct: ${clue.categoryName} ($${points})`;
    const tx = Scoring.applyScoreChange(team.id, points, reason, clue.id);
    SoundFX.correct();

    GameState.markClueCompleted(clue.id);
    GameState.setState({
      status: 'playing',
      currentClue: null,
      activeTeamId: team.id
    }, 'points_awarded');

    return tx;
  }

  function deductPoints(teamId, customPoints = null) {
    const state = GameState.getState();
    const clue = state.currentClue;
    if (!clue) return null;

    const points = customPoints !== null ? customPoints : clue.points;
    const team = state.teams.find(t => t.id === teamId) || GameState.getActiveTeam();
    if (!team) return null;

    const reason = clue.isDailyDouble ? `Daily Double Miss: ${clue.categoryName}` : `Incorrect: ${clue.categoryName} (-$${points})`;
    const tx = Scoring.applyScoreChange(team.id, -points, reason, clue.id);
    SoundFX.incorrect();

    // If it was a Daily Double, clue is automatically ended
    if (clue.isDailyDouble) {
      GameState.markClueCompleted(clue.id);
      GameState.setState({
        status: 'playing',
        currentClue: null
      }, 'daily_double_missed');
    }

    return tx;
  }

  function skipCurrentClue() {
    const state = GameState.getState();
    const clue = state.currentClue;
    if (!clue) return;

    stopTimer();
    GameState.markClueCompleted(clue.id);
    GameState.setState({
      status: 'playing',
      currentClue: null
    }, 'clue_skipped');
  }

  function closeClueWithoutCompleting() {
    stopTimer();
    GameState.setState({
      status: 'playing',
      currentClue: null
    }, 'clue_dismissed');
  }

  // --- Round & Game Lifecycle ---
  function advanceToNextRound() {
    const state = GameState.getState();
    const totalRounds = (state.gameData && state.gameData.game && state.gameData.game.rounds)
      ? state.gameData.game.rounds.length
      : 1;

    if (state.currentRoundIndex + 1 < totalRounds) {
      const nextIndex = state.currentRoundIndex + 1;
      GameState.setState({
        currentRoundIndex: nextIndex,
        status: 'playing'
      }, 'round_advanced');
      return { hasNextRound: true, nextRoundIndex: nextIndex };
    } else if (state.settings.finalJeopardyEnabled && state.gameData && state.gameData.game && state.gameData.game.finalJeopardy) {
      GameState.setState({
        status: 'final_jeopardy_wager'
      }, 'final_jeopardy_started');
      return { hasNextRound: false, isFinalJeopardy: true };
    } else {
      finishGame();
      return { hasNextRound: false, isFinalJeopardy: false, isFinished: true };
    }
  }

  function finishGame() {
    stopTimer();
    SoundFX.victory();
    GameState.setState({
      status: 'finished',
      endTime: Date.now()
    }, 'game_finished');
  }

  return {
    SoundFX,
    setMuted,
    toggleMute,
    startTimer,
    stopTimer,
    pauseTimer,
    resumeTimer,
    selectClue,
    commitDailyDoubleWager,
    revealCurrentAnswer,
    awardPoints,
    deductPoints,
    skipCurrentClue,
    closeClueWithoutCompleting,
    advanceToNextRound,
    finishGame
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GameEngine;
}
