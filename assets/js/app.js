/**
 * Main Public Application Controller for Trivia Jeopardy
 * Handles game routing, setup, clue modals, host controls, keyboard shortcuts, theme toggle, and audio.
 */

const App = (function () {
  'use strict';

  // Screen Views
  const VIEWS = {
    HOME: 'view-home',
    SETUP: 'view-setup',
    BOARD: 'view-board',
    FINAL_JEOPARDY: 'view-final-jeopardy',
    RESULTS: 'view-results'
  };

  const DEFAULT_TEAM_COLORS = [
    '#3b82f6', // Blue
    '#ef4444', // Red
    '#10b981', // Emerald
    '#f59e0b', // Amber
    '#8b5cf6', // Violet
    '#06b6d4', // Cyan
    '#ec4899', // Pink
    '#f97316'  // Orange
  ];

  let currentView = VIEWS.HOME;
  let timerActiveCallback = null;

  function init() {
    setupTheme();
    bindGlobalControls();
    bindHomeView();
    bindSetupView();
    bindClueModalEvents();
    bindFinalJeopardyEvents();
    bindResultsView();
    bindKeyboardShortcuts();
    setupStateSubscribers();

    // Fetch questions or fallback to sample-data.js
    loadGameData();
  }

  // --- Theme Management (Light / Dark Mode) ---
  function setupTheme() {
    const prefs = Persistence.loadPreferences();
    setTheme(prefs.theme || 'dark');

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-bs-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
        Persistence.savePreferences({ theme: next });
      });
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.body.className = `theme-${theme}`;
    const icon = document.querySelector('#theme-toggle-btn i');
    if (icon) {
      icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
    }
  }

  // --- View Switcher ---
  function switchView(viewId) {
    currentView = viewId;
    Object.values(VIEWS).forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        if (id === viewId) {
          el.classList.remove('d-none');
          el.classList.add('active');
        } else {
          el.classList.add('d-none');
          el.classList.remove('active');
        }
      }
    });

    if (viewId === VIEWS.HOME && typeof GameAnimations !== 'undefined') {
      GameAnimations.animateHomeEntrance();
    } else if (viewId === VIEWS.RESULTS && typeof GameAnimations !== 'undefined') {
      GameAnimations.animateResultsEntrance(document.getElementById('podium-container'));
      GameAnimations.triggerCelebration();
    }
  }

  // --- Data Loading ---
  async function loadGameData() {
    try {
      // Use cache-busting query parameter so all PCs and mobile devices always fetch the latest published questions from GitHub
      const cacheBustUrl = `assets/data/questions.json?_t=${Date.now()}`;
      const resp = await fetch(cacheBustUrl, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' }
      });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const data = await resp.json();
      GameState.setGameData(data);
    } catch (e) {
      console.warn('Could not load questions.json over fetch (file:// mode or offline). Trying local storage / fallback.', e);
      const customData = Persistence.loadCustomGame();
      if (customData && customData.game && Array.isArray(customData.game.rounds)) {
        GameState.setGameData(customData);
      } else if (window.DEFAULT_SAMPLE_QUESTIONS) {
        GameState.setGameData(JSON.parse(JSON.stringify(window.DEFAULT_SAMPLE_QUESTIONS)));
      } else {
        showAppModal('Loading Notice', 'Questions data file could not be loaded. Please ensure you are running on a local web server (e.g. VS Code Live Server) or deployed to GitHub Pages.', 'warning');
      }
    }

    renderHomePreview();
    checkSavedSession();
  }

  function checkSavedSession() {
    if (Persistence.hasSavedSession()) {
      const resumeBtn = document.getElementById('btn-home-resume');
      if (resumeBtn) resumeBtn.classList.remove('d-none');
    }
  }

  // --- Home Screen ---
  function bindHomeView() {
    const playBtn = document.getElementById('btn-home-play');
    if (playBtn) {
      playBtn.addEventListener('click', () => {
        openSetupView();
      });
    }

    const resumeBtn = document.getElementById('btn-home-resume');
    if (resumeBtn) {
      resumeBtn.addEventListener('click', () => {
        resumeSavedGame();
      });
    }

    const rulesBtn = document.getElementById('btn-home-rules');
    if (rulesBtn) {
      rulesBtn.addEventListener('click', () => {
        const modal = new bootstrap.Modal(document.getElementById('rulesModal'));
        modal.show();
      });
    }

    const shortcutsBtn = document.getElementById('btn-home-shortcuts');
    if (shortcutsBtn) {
      shortcutsBtn.addEventListener('click', () => {
        const modal = new bootstrap.Modal(document.getElementById('shortcutsModal'));
        modal.show();
      });
    }

    const soundToggle = document.getElementById('btn-sound-toggle');
    if (soundToggle) {
      soundToggle.addEventListener('click', () => {
        const isMuted = GameEngine.toggleMute();
        updateSoundIcon(isMuted);
      });
    }
  }

  function updateSoundIcon(isMuted) {
    const icon = document.querySelector('#btn-sound-toggle i');
    if (icon) {
      icon.className = isMuted ? 'bi bi-volume-mute-fill' : 'bi bi-volume-up-fill';
    }
  }

  function renderHomePreview() {
    const previewContainer = document.getElementById('home-board-preview');
    if (!previewContainer) return;

    const round = GameState.getCurrentRound();
    if (!round || !round.categories) return;

    const cats = round.categories.slice(0, 4); // show preview of 4 categories
    let html = '<div class="preview-mini-grid">';
    cats.forEach(c => {
      html += `<div class="preview-mini-col"><div class="mini-cat-title">${escapeHtml(c.name)}</div>`;
      for (let i = 1; i <= 3; i++) {
        html += `<div class="mini-tile">$${i * 100}</div>`;
      }
      html += '</div>';
    });
    html += '</div>';
    previewContainer.innerHTML = html;
  }

  // --- Game Setup Screen ---
  function openSetupView() {
    const state = GameState.getState();
    const game = state.gameData ? state.gameData.game : null;

    const titleInput = document.getElementById('setup-game-title');
    if (titleInput && game) {
      titleInput.value = game.title || 'Trivia Jeopardy';
    }

    // Settings
    const deductionCheck = document.getElementById('setup-incorrect-deduction');
    if (deductionCheck && game && game.settings) {
      deductionCheck.checked = !!game.settings.incorrectAnswerDeduction;
    }

    const questionFormCheck = document.getElementById('setup-require-question');
    if (questionFormCheck && game && game.settings) {
      questionFormCheck.checked = !!game.settings.requireQuestionForm;
    }

    const timerCheck = document.getElementById('setup-timer-enabled');
    if (timerCheck && game && game.settings) {
      timerCheck.checked = game.settings.timerEnabled !== false;
    }

    const timerDuration = document.getElementById('setup-timer-duration');
    if (timerDuration && game && game.settings) {
      timerDuration.value = game.settings.timerSeconds || 30;
    }

    const teamCountSelect = document.getElementById('setup-team-count');
    if (teamCountSelect) {
      teamCountSelect.value = '2';
      renderTeamInputs(2);
    }

    switchView(VIEWS.SETUP);
  }

  function bindSetupView() {
    const teamCountSelect = document.getElementById('setup-team-count');
    if (teamCountSelect) {
      teamCountSelect.addEventListener('change', (e) => {
        const count = parseInt(e.target.value, 10);
        renderTeamInputs(count);
      });
    }

    const backBtn = document.getElementById('btn-setup-back');
    if (backBtn) {
      backBtn.addEventListener('click', () => switchView(VIEWS.HOME));
    }

    const loadSampleBtn = document.getElementById('btn-setup-sample');
    if (loadSampleBtn) {
      loadSampleBtn.addEventListener('click', () => {
        if (window.DEFAULT_SAMPLE_QUESTIONS) {
          GameState.setGameData(JSON.parse(JSON.stringify(window.DEFAULT_SAMPLE_QUESTIONS)));
          showAppModal('Sample Data Loaded', 'The standard 2-round Trivia Jeopardy game has been loaded.', 'success');
        }
      });
    }

    const startGameBtn = document.getElementById('btn-setup-start');
    if (startGameBtn) {
      startGameBtn.addEventListener('click', handleStartGame);
    }
  }

  function renderTeamInputs(count) {
    const container = document.getElementById('setup-teams-list');
    if (!container) return;

    container.innerHTML = '';
    const defaultNames = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];

    for (let i = 0; i < count; i++) {
      const col = document.createElement('div');
      col.className = 'col-12 col-md-6 mb-3';
      const color = DEFAULT_TEAM_COLORS[i % DEFAULT_TEAM_COLORS.length];
      const defaultName = `Team ${defaultNames[i] || (i + 1)}`;

      col.innerHTML = `
        <div class="card p-3 bg-dark border-secondary">
          <div class="d-flex align-items-center gap-2">
            <input type="color" class="form-control form-control-color team-color-picker" id="team-color-${i}" value="${color}" title="Choose team accent color">
            <div class="flex-grow-1">
              <label for="team-name-${i}" class="form-label small text-muted mb-1">Team ${i + 1} Name</label>
              <input type="text" class="form-control form-control-sm team-name-input" id="team-name-${i}" value="${defaultName}" maxlength="24">
            </div>
          </div>
        </div>
      `;
      container.appendChild(col);
    }
  }

  function handleStartGame() {
    const titleInput = document.getElementById('setup-game-title');
    const teamCountSelect = document.getElementById('setup-team-count');
    const deductionCheck = document.getElementById('setup-incorrect-deduction');
    const questionFormCheck = document.getElementById('setup-require-question');
    const timerCheck = document.getElementById('setup-timer-enabled');
    const timerDuration = document.getElementById('setup-timer-duration');

    const count = parseInt(teamCountSelect.value, 10) || 2;
    const teams = [];

    for (let i = 0; i < count; i++) {
      const nameInput = document.getElementById(`team-name-${i}`);
      const colorInput = document.getElementById(`team-color-${i}`);
      const teamName = (nameInput ? nameInput.value.trim() : '') || `Team ${i + 1}`;
      const teamColor = colorInput ? colorInput.value : DEFAULT_TEAM_COLORS[i % DEFAULT_TEAM_COLORS.length];

      teams.push({
        id: `team-${i + 1}`,
        name: teamName,
        score: 0,
        color: teamColor
      });
    }

    const settings = {
      title: (titleInput ? titleInput.value.trim() : '') || 'Trivia Jeopardy',
      incorrectAnswerDeduction: deductionCheck ? deductionCheck.checked : false,
      requireQuestionForm: questionFormCheck ? questionFormCheck.checked : false,
      timerEnabled: timerCheck ? timerCheck.checked : true,
      timerSeconds: parseInt(timerDuration ? timerDuration.value : 30, 10) || 30,
      dailyDoubleEnabled: true,
      finalJeopardyEnabled: true,
      soundEnabled: true
    };

    GameState.resetGame();
    GameState.setState({
      status: 'playing',
      currentRoundIndex: 0,
      teams: teams,
      activeTeamId: teams[0].id,
      settings: settings,
      startTime: Date.now(),
      scoreHistory: []
    }, 'game_started');

    Persistence.saveSession(GameState.getState());

    startBoardView();
  }

  function resumeSavedGame() {
    const saved = Persistence.loadSession();
    if (!saved) {
      showAppModal('No Session', 'No saved session was found.', 'warning');
      return;
    }

    GameState.setState({
      status: saved.status || 'playing',
      currentRoundIndex: saved.currentRoundIndex || 0,
      usedClueIds: saved.usedClueIds || [],
      teams: saved.teams || [],
      activeTeamId: saved.activeTeamId || (saved.teams && saved.teams[0] ? saved.teams[0].id : 'team-1'),
      scoreHistory: saved.scoreHistory || [],
      settings: saved.settings || GameState.getState().settings,
      startTime: saved.startTime || Date.now()
    }, 'session_resumed');

    startBoardView();
  }

  // --- Main Board View ---
  function startBoardView() {
    switchView(VIEWS.BOARD);
    renderBoardView();
  }

  function renderBoardView() {
    const state = GameState.getState();
    const round = GameState.getCurrentRound();

    // Round title & Game title
    const roundTitleEl = document.getElementById('board-round-title');
    if (roundTitleEl && round) roundTitleEl.textContent = round.title;

    const gameTitleEl = document.getElementById('board-game-title');
    if (gameTitleEl) gameTitleEl.textContent = state.settings.title || 'Trivia Jeopardy';

    // Clues count
    updateRemainingCluesDisplay();

    // Scoreboard
    renderScoreboard();

    // Render Board Grid
    Board.render('#main-board-container', handleTileSelected);
  }

  function updateRemainingCluesDisplay() {
    const remainingEl = document.getElementById('board-remaining-clues');
    if (remainingEl) {
      const count = GameState.getRemainingCluesCount();
      remainingEl.textContent = `${count} Clues Remaining`;
    }
  }

  function handleTileSelected(clue, categoryName, tileEl) {
    if (typeof GameAnimations !== 'undefined') {
      GameAnimations.animateTileClick(tileEl, () => {
        executeClueSelection(clue, categoryName);
      });
    } else {
      executeClueSelection(clue, categoryName);
    }
  }

  function executeClueSelection(clue, categoryName) {
    const result = GameEngine.selectClue(clue, categoryName);
    if (!result.allowed) {
      showAppModal('Clue Unavailable', result.reason, 'info');
      return;
    }

    if (result.type === 'daily_double') {
      openDailyDoubleModal(result.clue);
    } else {
      openClueModal(result.clue);
    }
  }

  // --- Daily Double Flow ---
  function openDailyDoubleModal(clue) {
    const modalEl = document.getElementById('dailyDoubleModal');
    if (!modalEl) return;

    const activeTeam = GameState.getActiveTeam();
    const round = GameState.getCurrentRound();
    const maxBoardVal = round && round.multiplier === 2 ? 1000 : 500;
    const maxWager = Math.max(maxBoardVal, activeTeam ? activeTeam.score : 0);

    const teamSpan = document.getElementById('dd-team-name');
    const maxSpan = document.getElementById('dd-max-wager');
    const wagerInput = document.getElementById('dd-wager-input');

    if (teamSpan && activeTeam) {
      teamSpan.textContent = activeTeam.name;
      teamSpan.style.color = activeTeam.color;
    }
    if (maxSpan) maxSpan.textContent = `$${maxWager.toLocaleString()}`;
    if (wagerInput) {
      wagerInput.value = Math.min(maxWager, maxBoardVal);
      wagerInput.max = maxWager;
    }

    const bsModal = new bootstrap.Modal(modalEl, { backdrop: 'static' });
    bsModal.show();

    if (typeof GameAnimations !== 'undefined') {
      const ddCard = modalEl.querySelector('.daily-double-card');
      GameAnimations.animateDailyDouble(ddCard);
    }

    const confirmBtn = document.getElementById('btn-confirm-dd-wager');
    const newBtn = confirmBtn.cloneNode(true);
    confirmBtn.parentNode.replaceChild(newBtn, confirmBtn);

    newBtn.addEventListener('click', () => {
      const wagerVal = parseInt(wagerInput.value, 10);
      const commitRes = GameEngine.commitDailyDoubleWager(wagerVal);

      if (!commitRes.valid) {
        showAppModal('Invalid Wager', commitRes.error, 'warning');
        return;
      }

      bsModal.hide();
      setTimeout(() => {
        openClueModal(clue, true);
      }, 300);
    });
  }

  // --- Clue Modal Flow ---
  function openClueModal(clue, isDailyDouble = false) {
    const modalEl = document.getElementById('cluePresentationModal');
    if (!modalEl) return;

    const catNameEl = document.getElementById('clue-modal-category');
    const pointsEl = document.getElementById('clue-modal-points');
    const textEl = document.getElementById('clue-modal-text');
    const answerContainer = document.getElementById('clue-modal-answer-container');
    const answerTextEl = document.getElementById('clue-modal-answer-text');
    const explanationEl = document.getElementById('clue-modal-explanation');
    const imageContainer = document.getElementById('clue-modal-image-container');
    const revealBtn = document.getElementById('btn-clue-reveal');
    const actionsContainer = document.getElementById('clue-modal-actions');
    const questionReminder = document.getElementById('clue-question-reminder');
    const timerProgress = document.getElementById('clue-timer-progress');
    const timerSecondsEl = document.getElementById('clue-timer-seconds');

    if (catNameEl) catNameEl.textContent = clue.categoryName;
    if (pointsEl) {
      pointsEl.textContent = isDailyDouble ? `Daily Double: $${clue.points}` : `$${clue.points}`;
      pointsEl.className = isDailyDouble ? 'badge bg-warning text-dark fs-6' : 'badge bg-primary fs-6';
    }
    if (textEl) textEl.textContent = clue.clue;

    // Reset Answer visibility
    if (answerContainer) answerContainer.style.display = 'none';
    if (answerTextEl) answerTextEl.textContent = clue.answer;
    if (explanationEl) {
      if (clue.explanation) {
        explanationEl.textContent = clue.explanation;
        explanationEl.classList.remove('d-none');
      } else {
        explanationEl.classList.add('d-none');
      }
    }

    // Optional image
    if (imageContainer) {
      if (clue.image) {
        imageContainer.innerHTML = `<img src="${escapeHtml(clue.image)}" alt="Clue reference" class="img-fluid rounded mb-3" style="max-height: 250px;">`;
        imageContainer.classList.remove('d-none');
      } else {
        imageContainer.innerHTML = '';
        imageContainer.classList.add('d-none');
      }
    }

    // Question format reminder
    const state = GameState.getState();
    if (questionReminder) {
      if (state.settings.requireQuestionForm) {
        questionReminder.classList.remove('d-none');
      } else {
        questionReminder.classList.add('d-none');
      }
    }

    // Reveal Button & Action Buttons
    if (revealBtn) revealBtn.classList.remove('d-none');
    if (actionsContainer) actionsContainer.classList.add('d-none');

    // Populate team selection pills inside Clue Modal
    populateClueTeamSelector();

    const bsModal = new bootstrap.Modal(modalEl, { backdrop: 'static', keyboard: false });
    bsModal.show();

    if (typeof GameAnimations !== 'undefined') {
      GameAnimations.animateClueOpen(modalEl.querySelector('.modal-content'));
    }

    // Start Timer if enabled
    if (state.settings.timerEnabled) {
      const duration = state.settings.timerSeconds || 30;
      if (timerProgress) timerProgress.style.width = '100%';
      if (timerSecondsEl) timerSecondsEl.textContent = `${duration}s`;

      GameEngine.startTimer(
        duration,
        (remaining) => {
          const pct = (remaining / duration) * 100;
          if (timerProgress) timerProgress.style.width = `${pct}%`;
          if (timerSecondsEl) timerSecondsEl.textContent = `${remaining}s`;
        },
        () => {
          if (timerSecondsEl) timerSecondsEl.textContent = 'Time Up!';
        }
      );
    } else {
      if (timerSecondsEl) timerSecondsEl.textContent = '';
      if (timerProgress) timerProgress.style.width = '0%';
    }
  }

  function populateClueTeamSelector() {
    const container = document.getElementById('clue-team-selector');
    if (!container) return;
    const state = GameState.getState();

    container.innerHTML = '';
    state.teams.forEach(team => {
      const isActive = team.id === state.activeTeamId;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `btn btn-sm ${isActive ? 'btn-light fw-bold ring-active' : 'btn-outline-secondary'}`;
      btn.style.borderColor = team.color;
      btn.innerHTML = `<span class="team-dot" style="background:${team.color}; display:inline-block; width:10px; height:10px; border-radius:50%; margin-right:6px;"></span>${escapeHtml(team.name)}`;

      btn.addEventListener('click', () => {
        GameState.setState({ activeTeamId: team.id }, 'active_team_change');
        populateClueTeamSelector();
      });

      container.appendChild(btn);
    });
  }

  function bindClueModalEvents() {
    const revealBtn = document.getElementById('btn-clue-reveal');
    const answerContainer = document.getElementById('clue-modal-answer-container');
    const actionsContainer = document.getElementById('clue-modal-actions');
    const modalEl = document.getElementById('cluePresentationModal');

    if (revealBtn) {
      revealBtn.addEventListener('click', () => {
        revealCurrentClueAnswer();
      });
    }

    const btnCorrect = document.getElementById('btn-clue-correct');
    if (btnCorrect) {
      btnCorrect.addEventListener('click', () => {
        const state = GameState.getState();
        const activeTeam = GameState.getActiveTeam();
        GameEngine.awardPoints(activeTeam ? activeTeam.id : 'team-1');
        closeClueModal();
      });
    }

    const btnIncorrect = document.getElementById('btn-clue-incorrect');
    if (btnIncorrect) {
      btnIncorrect.addEventListener('click', () => {
        const state = GameState.getState();
        const activeTeam = GameState.getActiveTeam();
        if (state.settings.incorrectAnswerDeduction) {
          GameEngine.deductPoints(activeTeam ? activeTeam.id : 'team-1');
        } else {
          GameEngine.SoundFX.incorrect();
        }
        // If daily double, close clue. Otherwise keep modal open for next team attempt or skip.
        if (state.currentClue && state.currentClue.isDailyDouble) {
          closeClueModal();
        }
      });
    }

    const btnSkip = document.getElementById('btn-clue-skip');
    if (btnSkip) {
      btnSkip.addEventListener('click', () => {
        GameEngine.skipCurrentClue();
        closeClueModal();
      });
    }

    const btnDismiss = document.getElementById('btn-clue-dismiss');
    if (btnDismiss) {
      btnDismiss.addEventListener('click', () => {
        GameEngine.closeClueWithoutCompleting();
        closeClueModal();
      });
    }
  }

  function revealCurrentClueAnswer() {
    const revealBtn = document.getElementById('btn-clue-reveal');
    const answerContainer = document.getElementById('clue-modal-answer-container');
    const actionsContainer = document.getElementById('clue-modal-actions');

    GameEngine.revealCurrentAnswer();

    if (revealBtn) revealBtn.classList.add('d-none');
    if (answerContainer) {
      answerContainer.style.display = 'block';
      if (typeof GameAnimations !== 'undefined') {
        GameAnimations.animateAnswerReveal(answerContainer);
      }
    }
    if (actionsContainer) actionsContainer.classList.remove('d-none');
  }

  function closeClueModal() {
    const modalEl = document.getElementById('cluePresentationModal');
    const bsModal = bootstrap.Modal.getInstance(modalEl);
    if (bsModal) bsModal.hide();

    // Check if round completed
    setTimeout(() => {
      checkRoundStatus();
    }, 350);
  }

  function checkRoundStatus() {
    if (GameState.isRoundCompleted()) {
      const state = GameState.getState();
      const currentRound = GameState.getCurrentRound();
      const totalRounds = (state.gameData && state.gameData.game && state.gameData.game.rounds)
        ? state.gameData.game.rounds.length
        : 1;

      if (state.currentRoundIndex + 1 < totalRounds) {
        // Double Jeopardy transition
        showRoundAdvanceBanner();
      } else if (state.settings.finalJeopardyEnabled) {
        showFinalJeopardyTransition();
      } else {
        GameEngine.finishGame();
      }
    }
  }

  function showRoundAdvanceBanner() {
    const banner = document.getElementById('round-transition-overlay');
    if (!banner) {
      GameEngine.advanceToNextRound();
      renderBoardView();
      return;
    }

    banner.classList.remove('d-none');
    banner.querySelector('.round-next-title').textContent = 'DOUBLE JEOPARDY!';
    banner.querySelector('.round-next-desc').textContent = 'Point values are doubled! Prepare for the next round.';

    GameEngine.SoundFX.dailyDouble();

    if (typeof GameAnimations !== 'undefined') {
      GameAnimations.animateRoundTransition(banner, () => {
        banner.classList.add('d-none');
        GameEngine.advanceToNextRound();
        renderBoardView();
      });
    } else {
      setTimeout(() => {
        banner.classList.add('d-none');
        GameEngine.advanceToNextRound();
        renderBoardView();
      }, 2500);
    }
  }

  function showFinalJeopardyTransition() {
    const banner = document.getElementById('round-transition-overlay');
    if (!banner) {
      startFinalJeopardy();
      return;
    }

    banner.classList.remove('d-none');
    banner.querySelector('.round-next-title').textContent = 'FINAL JEOPARDY!';
    banner.querySelector('.round-next-desc').textContent = 'The decisive final round. Teams will make secret wagers!';

    GameEngine.SoundFX.victory();

    if (typeof GameAnimations !== 'undefined') {
      GameAnimations.animateRoundTransition(banner, () => {
        banner.classList.add('d-none');
        startFinalJeopardy();
      });
    } else {
      setTimeout(() => {
        banner.classList.add('d-none');
        startFinalJeopardy();
      }, 2500);
    }
  }

  // --- Final Jeopardy Flow ---
  function startFinalJeopardy() {
    const state = GameState.getState();
    const fjData = state.gameData && state.gameData.game && state.gameData.game.finalJeopardy;
    if (!fjData) {
      GameEngine.finishGame();
      return;
    }

    switchView(VIEWS.FINAL_JEOPARDY);

    const catEl = document.getElementById('fj-category-name');
    if (catEl) catEl.textContent = fjData.category || 'Final Trivia';

    // Step 1: Collect secret wagers
    const wagersStep = document.getElementById('fj-step-wagers');
    const clueStep = document.getElementById('fj-step-clue');
    const evaluateStep = document.getElementById('fj-step-evaluate');

    if (wagersStep) wagersStep.classList.remove('d-none');
    if (clueStep) clueStep.classList.add('d-none');
    if (evaluateStep) evaluateStep.classList.add('d-none');

    renderFinalJeopardyWagerForms();
  }

  function renderFinalJeopardyWagerForms() {
    const container = document.getElementById('fj-wagers-container');
    if (!container) return;
    const state = GameState.getState();

    container.innerHTML = '';
    state.teams.forEach(team => {
      const maxWager = Math.max(0, team.score);
      const card = document.createElement('div');
      card.className = 'col-12 col-md-6 mb-3';
      card.innerHTML = `
        <div class="card p-3 bg-dark border-secondary">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <strong style="color: ${team.color}"><i class="bi bi-people-fill me-1"></i>${escapeHtml(team.name)}</strong>
            <span class="badge bg-secondary">Current: $${team.score.toLocaleString()}</span>
          </div>
          <div class="input-group input-group-sm">
            <span class="input-group-text bg-secondary border-0 text-light">$</span>
            <input type="password" class="form-control bg-dark text-light border-secondary fj-wager-input" data-team-id="${team.id}" max="${maxWager}" min="0" placeholder="Secret Wager (Max: $${maxWager})">
            <button class="btn btn-outline-secondary btn-toggle-fj-mask" type="button" title="Peek wager"><i class="bi bi-eye"></i></button>
          </div>
          <small class="text-muted mt-1">Eligible wager: $0 to $${maxWager.toLocaleString()}</small>
        </div>
      `;

      const input = card.querySelector('.fj-wager-input');
      const toggleBtn = card.querySelector('.btn-toggle-fj-mask');
      toggleBtn.addEventListener('click', () => {
        const isMasked = input.type === 'password';
        input.type = isMasked ? 'number' : 'password';
        toggleBtn.querySelector('i').className = isMasked ? 'bi bi-eye-slash' : 'bi bi-eye';
      });

      container.appendChild(card);
    });
  }

  function bindFinalJeopardyEvents() {
    const submitWagersBtn = document.getElementById('btn-fj-submit-wagers');
    if (submitWagersBtn) {
      submitWagersBtn.addEventListener('click', handleFjWagersSubmitted);
    }

    const revealAnswerBtn = document.getElementById('btn-fj-reveal-answer');
    if (revealAnswerBtn) {
      revealAnswerBtn.addEventListener('click', handleFjRevealAnswer);
    }

    const commitResultsBtn = document.getElementById('btn-fj-commit-results');
    if (commitResultsBtn) {
      commitResultsBtn.addEventListener('click', handleFjCommitResults);
    }
  }

  function handleFjWagersSubmitted() {
    const state = GameState.getState();
    const inputs = document.querySelectorAll('.fj-wager-input');
    const wagers = {};

    let hasError = false;
    inputs.forEach(inp => {
      const teamId = inp.dataset.teamId;
      const team = state.teams.find(t => t.id === teamId);
      const maxAllowed = Math.max(0, team ? team.score : 0);
      let val = parseInt(inp.value, 10);

      if (isNaN(val) || val < 0) {
        val = 0; // Default to 0 if empty or negative
      }
      if (val > maxAllowed) {
        showAppModal('Invalid Wager', `${team.name} entered $${val}, which exceeds their maximum allowed wager of $${maxAllowed}.`, 'warning');
        hasError = true;
        return;
      }
      wagers[teamId] = val;
    });

    if (hasError) return;

    GameState.setState({ finalJeopardyWagers: wagers }, 'fj_wagers_saved');

    // Proceed to Clue Step
    const wagersStep = document.getElementById('fj-step-wagers');
    const clueStep = document.getElementById('fj-step-clue');
    const fjData = state.gameData.game.finalJeopardy;

    if (wagersStep) wagersStep.classList.add('d-none');
    if (clueStep) clueStep.classList.remove('d-none');

    const clueTextEl = document.getElementById('fj-clue-text');
    if (clueTextEl) clueTextEl.textContent = fjData.clue;

    GameEngine.SoundFX.clueOpen();

    // Start 30s timer for players to think
    const timerProgress = document.getElementById('fj-timer-progress');
    const timerSeconds = document.getElementById('fj-timer-seconds');
    GameEngine.startTimer(
      30,
      (rem) => {
        if (timerProgress) timerProgress.style.width = `${(rem / 30) * 100}%`;
        if (timerSeconds) timerSeconds.textContent = `${rem}s`;
      },
      () => {
        if (timerSeconds) timerSeconds.textContent = 'Time Up!';
      }
    );
  }

  function handleFjRevealAnswer() {
    GameEngine.stopTimer();
    GameEngine.SoundFX.answerReveal();

    const state = GameState.getState();
    const fjData = state.gameData.game.finalJeopardy;

    const answerBox = document.getElementById('fj-answer-box');
    const answerText = document.getElementById('fj-answer-text');
    const answerExpl = document.getElementById('fj-answer-explanation');
    const evaluateStep = document.getElementById('fj-step-evaluate');

    if (answerBox) answerBox.classList.remove('d-none');
    if (answerText) answerText.textContent = fjData.answer;
    if (answerExpl) answerExpl.textContent = fjData.explanation || '';
    if (evaluateStep) evaluateStep.classList.remove('d-none');

    renderFinalJeopardyEvaluationList();
  }

  function renderFinalJeopardyEvaluationList() {
    const container = document.getElementById('fj-evaluation-list');
    if (!container) return;
    const state = GameState.getState();

    container.innerHTML = '';
    state.teams.forEach(team => {
      const wager = (state.finalJeopardyWagers && state.finalJeopardyWagers[team.id]) || 0;
      const row = document.createElement('div');
      row.className = 'col-12 col-md-6 mb-3';
      row.innerHTML = `
        <div class="card p-3 bg-dark border-secondary">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <strong style="color: ${team.color}">${escapeHtml(team.name)}</strong>
            <span class="badge bg-primary">Wager: $${wager.toLocaleString()}</span>
          </div>
          <div class="btn-group w-100" role="group">
            <input type="radio" class="btn-check" name="fj-eval-${team.id}" id="fj-correct-${team.id}" value="correct" checked>
            <label class="btn btn-outline-success" for="fj-correct-${team.id}"><i class="bi bi-check-lg me-1"></i>Correct</label>
            <input type="radio" class="btn-check" name="fj-eval-${team.id}" id="fj-incorrect-${team.id}" value="incorrect">
            <label class="btn btn-outline-danger" for="fj-incorrect-${team.id}"><i class="bi bi-x-lg me-1"></i>Incorrect</label>
          </div>
        </div>
      `;
      container.appendChild(row);
    });
  }

  function handleFjCommitResults() {
    const state = GameState.getState();
    const wagers = state.finalJeopardyWagers || {};

    state.teams.forEach(team => {
      const isCorrectRadio = document.getElementById(`fj-correct-${team.id}`);
      const isCorrect = isCorrectRadio ? isCorrectRadio.checked : true;
      const wager = wagers[team.id] || 0;

      if (isCorrect) {
        Scoring.applyScoreChange(team.id, wager, `Final Jeopardy: Correct (+$${wager})`, 'final-jeopardy');
      } else {
        Scoring.applyScoreChange(team.id, -wager, `Final Jeopardy: Incorrect (-$${wager})`, 'final-jeopardy');
      }
    });

    GameEngine.finishGame();
  }

  // --- Results Screen ---
  function renderResultsScreen() {
    switchView(VIEWS.RESULTS);
    const state = GameState.getState();

    // Sort teams by score descending
    const sortedTeams = [...state.teams].sort((a, b) => b.score - a.score);
    const highestScore = sortedTeams[0] ? sortedTeams[0].score : 0;
    const winners = sortedTeams.filter(t => t.score === highestScore);

    // Winner banner
    const winnerBanner = document.getElementById('results-winner-banner');
    if (winnerBanner) {
      if (winners.length > 1) {
        const winnerNames = winners.map(w => escapeHtml(w.name)).join(' & ');
        winnerBanner.innerHTML = `
          <div class="alert alert-warning py-3">
            <i class="bi bi-trophy-fill fs-2 me-2"></i>
            <h3 class="d-inline align-middle">It's a Tie!</h3>
            <p class="lead mb-0 mt-2">Congratulations to co-champions: <strong>${winnerNames}</strong> with $${highestScore.toLocaleString()}!</p>
          </div>
        `;
      } else if (winners.length === 1) {
        winnerBanner.innerHTML = `
          <div class="alert alert-warning py-3">
            <i class="bi bi-trophy-fill fs-2 me-2"></i>
            <h3 class="d-inline align-middle">Champion: ${escapeHtml(winners[0].name)}!</h3>
            <p class="lead mb-0 mt-2">Finishing with a grand total of <strong>$${highestScore.toLocaleString()}</strong></p>
          </div>
        `;
      }
    }

    // Podium cards
    const podiumContainer = document.getElementById('podium-container');
    if (podiumContainer) {
      podiumContainer.innerHTML = '';
      sortedTeams.forEach((team, idx) => {
        const rank = idx + 1;
        const card = document.createElement('div');
        card.className = 'col-12 col-md-4 mb-3';
        const rankBadge = rank === 1 ? '🥇 1st' : rank === 2 ? '🥈 2nd' : rank === 3 ? '🥉 3rd' : `${rank}th`;

        card.innerHTML = `
          <div class="card ranking-card p-3 text-center bg-dark border-secondary h-100 ${rank === 1 ? 'gold-glow' : ''}">
            <div class="fs-4 mb-2">${rankBadge}</div>
            <h5 class="fw-bold mb-1" style="color: ${team.color}">${escapeHtml(team.name)}</h5>
            <div class="fs-3 fw-bold text-warning mb-2">$${team.score.toLocaleString()}</div>
          </div>
        `;
        podiumContainer.appendChild(card);
      });
    }

    // Stats
    const totalCluesEl = document.getElementById('stat-completed-clues');
    const totalPointsEl = document.getElementById('stat-total-points');
    const durationEl = document.getElementById('stat-game-duration');

    if (totalCluesEl) totalCluesEl.textContent = state.usedClueIds.length;
    if (totalPointsEl) {
      const sum = state.teams.reduce((acc, t) => acc + Math.max(0, t.score), 0);
      totalPointsEl.textContent = `$${sum.toLocaleString()}`;
    }
    if (durationEl && state.startTime) {
      const elapsedMs = (state.endTime || Date.now()) - state.startTime;
      const mins = Math.floor(elapsedMs / 60000);
      const secs = Math.floor((elapsedMs % 60000) / 1000);
      durationEl.textContent = `${mins}m ${secs}s`;
    }

    // Clear saved session on natural game finish
    Persistence.clearSession();
  }

  function bindResultsView() {
    const playAgainBtn = document.getElementById('btn-results-play-again');
    if (playAgainBtn) {
      playAgainBtn.addEventListener('click', () => {
        openSetupView();
      });
    }

    const returnHomeBtn = document.getElementById('btn-results-return-home');
    if (returnHomeBtn) {
      returnHomeBtn.addEventListener('click', () => {
        switchView(VIEWS.HOME);
      });
    }

    const historyBtn = document.getElementById('btn-results-history');
    if (historyBtn) {
      historyBtn.addEventListener('click', () => {
        openScoreHistoryModal();
      });
    }
  }

  // --- Scoreboard Component ---
  function renderScoreboard() {
    const container = document.getElementById('board-scoreboard');
    if (!container) return;
    const state = GameState.getState();

    container.innerHTML = '';
    state.teams.forEach(team => {
      const isActive = team.id === state.activeTeamId;
      const teamCard = document.createElement('div');
      teamCard.className = `team-score-card ${isActive ? 'active-team-card' : ''}`;
      teamCard.style.setProperty('--team-accent', team.color);

      teamCard.innerHTML = `
        <div class="team-card-inner">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="team-name text-truncate" title="${escapeHtml(team.name)}">
              ${isActive ? '<i class="bi bi-caret-right-fill active-indicator me-1"></i>' : ''}${escapeHtml(team.name)}
            </span>
            <div class="btn-group btn-group-sm">
              <button class="btn btn-sm btn-icon btn-team-plus" title="Add $100"><i class="bi bi-plus"></i></button>
              <button class="btn btn-sm btn-icon btn-team-minus" title="Subtract $100"><i class="bi bi-dash"></i></button>
            </div>
          </div>
          <div class="team-score-val" id="score-val-${team.id}">$${team.score.toLocaleString()}</div>
        </div>
      `;

      // Click card to make active team
      teamCard.addEventListener('click', (e) => {
        if (!e.target.closest('button')) {
          GameState.setState({ activeTeamId: team.id }, 'active_team_selected');
          renderScoreboard();
        }
      });

      // Quick plus/minus host adjustments
      teamCard.querySelector('.btn-team-plus').addEventListener('click', (e) => {
        e.stopPropagation();
        Scoring.applyScoreChange(team.id, 100, 'Host +100 adjustment', null);
      });

      teamCard.querySelector('.btn-team-minus').addEventListener('click', (e) => {
        e.stopPropagation();
        Scoring.applyScoreChange(team.id, -100, 'Host -100 adjustment', null);
      });

      container.appendChild(teamCard);
    });
  }

  // --- Global Host Controls & Modals ---
  function bindGlobalControls() {
    // Score History Modal
    const historyBtn = document.getElementById('btn-board-history');
    if (historyBtn) {
      historyBtn.addEventListener('click', openScoreHistoryModal);
    }

    // Manual Score Adjust Modal
    const adjustBtn = document.getElementById('btn-board-adjust-scores');
    if (adjustBtn) {
      adjustBtn.addEventListener('click', openManualScoreModal);
    }

    // Undo Last Score button
    const undoBtn = document.getElementById('btn-board-undo');
    if (undoBtn) {
      undoBtn.addEventListener('click', () => {
        const undone = Scoring.undoLastTransaction();
        if (undone) {
          showAppModal('Score Undone', `Reversed: ${undone.teamName} ${undone.change >= 0 ? '+' : ''}${undone.change} (${undone.reason})`, 'info');
        } else {
          showAppModal('Nothing to Undo', 'Score transaction history is empty.', 'info');
        }
      });
    }

    // Reset Game button
    const resetBtn = document.getElementById('btn-board-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        showConfirmModal('Reset Game Progress', 'Are you sure you want to abandon the current game and return to the home screen? All current scores and progress will be lost.', () => {
          Persistence.clearSession();
          GameState.resetGame();
          switchView(VIEWS.HOME);
        });
      });
    }

    // Advance Round button
    const nextRoundBtn = document.getElementById('btn-board-next-round');
    if (nextRoundBtn) {
      nextRoundBtn.addEventListener('click', () => {
        showConfirmModal('Advance Round', 'Manually advance to the next round?', () => {
          GameEngine.advanceToNextRound();
          renderBoardView();
        });
      });
    }

    // Fullscreen toggle
    const fullscreenBtn = document.getElementById('btn-fullscreen-toggle');
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', toggleFullscreen);
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn('Fullscreen request blocked or unsupported:', err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  function openScoreHistoryModal() {
    const modalEl = document.getElementById('scoreHistoryModal');
    if (!modalEl) return;
    const bodyEl = document.getElementById('scoreHistoryTableBody');
    const history = Scoring.getScoreHistory();

    if (bodyEl) {
      if (history.length === 0) {
        bodyEl.innerHTML = '<tr><td colspan="5" class="text-center text-muted py-3">No score adjustments recorded yet.</td></tr>';
      } else {
        bodyEl.innerHTML = '';
        history.slice().reverse().forEach(tx => {
          const tr = document.createElement('tr');
          const isGain = tx.change >= 0;
          tr.innerHTML = `
            <td><small class="text-muted">${new Date(tx.timestamp).toLocaleTimeString()}</small></td>
            <td><strong>${escapeHtml(tx.teamName)}</strong></td>
            <td class="${isGain ? 'text-success' : 'text-danger'} fw-bold">${isGain ? '+' : ''}$${tx.change.toLocaleString()}</td>
            <td>$${tx.newScore.toLocaleString()}</td>
            <td><small class="text-muted">${escapeHtml(tx.reason)}</small></td>
          `;
          bodyEl.appendChild(tr);
        });
      }
    }

    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
  }

  function openManualScoreModal() {
    const modalEl = document.getElementById('scoreAdjustmentModal');
    if (!modalEl) return;
    const container = document.getElementById('scoreAdjustmentList');
    const state = GameState.getState();

    if (container) {
      container.innerHTML = '';
      state.teams.forEach(team => {
        const row = document.createElement('div');
        row.className = 'mb-3 pb-3 border-bottom border-secondary';
        row.innerHTML = `
          <div class="d-flex justify-content-between align-items-center mb-1">
            <strong style="color: ${team.color}">${escapeHtml(team.name)}</strong>
            <span class="text-muted small">Current: $${team.score.toLocaleString()}</span>
          </div>
          <div class="input-group input-group-sm">
            <span class="input-group-text bg-secondary border-0 text-light">Set To $</span>
            <input type="number" class="form-control bg-dark text-light border-secondary adjust-score-input" id="adj-score-${team.id}" value="${team.score}">
            <button class="btn btn-outline-primary btn-apply-score-adj" data-team-id="${team.id}">Update</button>
          </div>
        `;

        row.querySelector('.btn-apply-score-adj').addEventListener('click', () => {
          const input = row.querySelector('.adjust-score-input');
          const val = parseInt(input.value, 10);
          if (!isNaN(val)) {
            Scoring.setTeamScore(team.id, val, 'Manual host adjustment');
            showAppModal('Score Updated', `${team.name} score updated to $${val.toLocaleString()}`, 'success');
          }
        });

        container.appendChild(row);
      });
    }

    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
  }

  // --- Keyboard Shortcuts System ---
  function bindKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Never intercept when user is typing in forms/inputs/textareas/contenteditable
      const targetTag = (e.target.tagName || '').toLowerCase();
      if (targetTag === 'input' || targetTag === 'textarea' || targetTag === 'select' || e.target.isContentEditable) {
        return;
      }

      // 'F' -> Fullscreen
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
        return;
      }

      // 'M' -> Sound Toggle
      if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        const isMuted = GameEngine.toggleMute();
        updateSoundIcon(isMuted);
        return;
      }

      // 'R' -> Reveal clue answer if clue presentation modal is open
      if (e.key === 'r' || e.key === 'R') {
        const state = GameState.getState();
        if (state.status === 'clue_active' || state.status === 'clue_revealed') {
          e.preventDefault();
          revealCurrentClueAnswer();
          return;
        }
      }

      // '1' through '8' -> Switch Active Team
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 8) {
        const state = GameState.getState();
        if (state.teams && state.teams[num - 1]) {
          e.preventDefault();
          GameState.setState({ activeTeamId: state.teams[num - 1].id }, 'keyboard_team_select');
          renderScoreboard();
          return;
        }
      }
    });
  }

  // --- Subscriptions to Game State ---
  function setupStateSubscribers() {
    GameState.on('clueCompleted', (clueId) => {
      Board.markTileCompleted(clueId);
      updateRemainingCluesDisplay();
      Persistence.saveSession(GameState.getState());
    });

    GameState.on('scoreTransaction', (tx) => {
      renderScoreboard();
      Persistence.saveSession(GameState.getState());
    });

    GameState.on('scoreUndo', () => {
      renderScoreboard();
      Persistence.saveSession(GameState.getState());
    });

    GameState.on('statusChange', (newStatus) => {
      if (newStatus === 'finished') {
        renderResultsScreen();
      }
    });
  }

  // --- Universal Dialog Helpers ---
  function showAppModal(title, message, type = 'info') {
    const modalEl = document.getElementById('appDialogModal');
    if (!modalEl) return;
    const titleEl = document.getElementById('appDialogModalTitle');
    const bodyEl = document.getElementById('appDialogModalBody');

    if (titleEl) titleEl.textContent = title;
    if (bodyEl) bodyEl.innerHTML = `<p class="mb-0" style="white-space: pre-wrap;">${escapeHtml(message)}</p>`;

    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
  }

  function showConfirmModal(title, messageHtml, onConfirm) {
    const modalEl = document.getElementById('appConfirmModal');
    if (!modalEl) return;
    const titleEl = document.getElementById('appConfirmModalTitle');
    const bodyEl = document.getElementById('appConfirmModalBody');
    const confirmBtn = document.getElementById('appConfirmModalBtn');

    if (titleEl) titleEl.textContent = title;
    if (bodyEl) bodyEl.innerHTML = messageHtml;

    const newBtn = confirmBtn.cloneNode(true);
    confirmBtn.parentNode.replaceChild(newBtn, confirmBtn);

    const bsModal = new bootstrap.Modal(modalEl);
    newBtn.addEventListener('click', () => {
      bsModal.hide();
      if (typeof onConfirm === 'function') onConfirm();
    });

    bsModal.show();
  }

  function escapeHtml(str) {
    if (!str && str !== 0) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  return {
    init,
    showAppModal,
    showConfirmModal
  };
})();

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', App.init);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = App;
}
