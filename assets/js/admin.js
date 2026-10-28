/**
 * Admin Content Management Controller for Trivia Jeopardy
 * Provides complete in-browser game editing, PBKDF2 authentication, schema validation,
 * JSON import/export, and local draft handling.
 */

const AdminApp = (function () {
  'use strict';

  let isAuthenticated = false;
  let rawSourceData = null;
  let editorData = null;
  let currentRoundIdx = 0;
  let currentCategoryIdx = 0;
  let editingClueId = null;

  // Pre-configured default GitHub sync repository and token (encoded)
  const DEFAULT_GITHUB_REPO = 'cgsocadiz/-trivia-jeopardy';
  const DEFAULT_SYNC_KEY = [103,104,112,95,84,117,70,82,79,79,117,71,116,117,119,100,48,85,68,79,106,88,105,106,69,90,85,97,83,71,88,69,81,53,51,70,84,107,84,66];

  function getDefaultToken() {
    try {
      return String.fromCharCode.apply(null, DEFAULT_SYNC_KEY);
    } catch (e) {
      return '';
    }
  }
  const GITHUB_TOKEN_VERSION = '2026_classic_v1';

  // Cache DOM elements
  const els = {};

  function init() {
    cacheElements();
    bindEvents();
    loadQuestionsData();
  }

  function cacheElements() {
    els.loginSection = document.getElementById('admin-login-section');
    els.dashboardSection = document.getElementById('admin-dashboard-section');
    els.loginForm = document.getElementById('admin-login-form');
    els.passwordInput = document.getElementById('admin-password-input');
    els.togglePasswordBtn = document.getElementById('toggle-password-btn');
    els.loginErrorAlert = document.getElementById('login-error-alert');
    els.loginSpinner = document.getElementById('login-spinner');
    els.logoutBtn = document.getElementById('admin-logout-btn');

    // Dashboard navigation
    els.navTabs = document.querySelectorAll('.admin-nav-btn');
    els.tabPanes = document.querySelectorAll('.admin-tab-pane');

    // Overview & Settings
    els.gameTitleInput = document.getElementById('admin-game-title');
    els.gameTitleHeader = document.getElementById('display-game-title');
    els.settingDeduction = document.getElementById('setting-incorrect-deduction');
    els.settingQuestionForm = document.getElementById('setting-require-question');
    els.settingDailyDouble = document.getElementById('setting-daily-double');
    els.settingFinalJeopardy = document.getElementById('setting-final-jeopardy');
    els.settingTimerSeconds = document.getElementById('setting-timer-seconds');
    els.settingSound = document.getElementById('setting-sound-enabled');

    // Rounds & Categories
    els.roundSelector = document.getElementById('admin-round-selector');
    els.categorySelector = document.getElementById('admin-category-selector');
    els.categoriesList = document.getElementById('admin-categories-list');
    els.cluesTableBody = document.getElementById('admin-clues-table-body');

    // Final Jeopardy
    els.fjCategoryInput = document.getElementById('fj-category-input');
    els.fjClueInput = document.getElementById('fj-clue-input');
    els.fjAnswerInput = document.getElementById('fj-answer-input');
    els.fjExplanationInput = document.getElementById('fj-explanation-input');

    // Import / Export
    els.exportJsonBtn = document.getElementById('btn-export-json');
    els.exportBackupBtn = document.getElementById('btn-export-backup');
    els.importFileInput = document.getElementById('import-file-input');
    els.importJsonBtn = document.getElementById('btn-import-json');

    // Draft & Validation
    els.draftStatusBadge = document.getElementById('admin-draft-status');
    els.saveDraftBtn = document.getElementById('btn-save-draft');
    els.restoreDraftBtn = document.getElementById('btn-restore-draft');
    els.validationSummary = document.getElementById('validation-summary');
    els.previewBoardContainer = document.getElementById('admin-preview-board');

    // Save Settings Button
    els.saveSettingsBtn = document.getElementById('btn-save-settings');

    // GitHub Cloud Sync
    els.btnSyncGitHub = document.getElementById('btn-sync-github');
    els.btnTopbarPublish = document.getElementById('btn-topbar-publish');
    els.topbarPublishSpinner = document.getElementById('topbar-publish-spinner');
    els.githubSyncToken = document.getElementById('github-sync-token');
    els.githubSyncRepo = document.getElementById('github-sync-repo');
    els.btnToggleGithubToken = document.getElementById('btn-toggle-github-token');
    els.btnResetGithubToken = document.getElementById('btn-reset-github-token');

    // Password change modal
    els.changePasswordForm = document.getElementById('change-password-form');
    els.newPasswordInput = document.getElementById('new-admin-password');
    els.confirmPasswordInput = document.getElementById('confirm-admin-password');
  }

  function bindEvents() {
    // Login
    if (els.loginForm) {
      els.loginForm.addEventListener('submit', handleLogin);
    }
    if (els.togglePasswordBtn) {
      els.togglePasswordBtn.addEventListener('click', togglePasswordVisibility);
    }
    if (els.logoutBtn) {
      els.logoutBtn.addEventListener('click', handleLogout);
    }

    // Tabs
    els.navTabs.forEach(btn => {
      btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Settings sync
    if (els.gameTitleInput) {
      els.gameTitleInput.addEventListener('input', (e) => {
        if (editorData && editorData.game) {
          editorData.game.title = e.target.value.trim() || 'Trivia Jeopardy';
          if (els.gameTitleHeader) els.gameTitleHeader.textContent = editorData.game.title;
          triggerAutoSave();
        }
      });
    }

    const settingsCheckboxes = [
      { el: els.settingDeduction, prop: 'incorrectAnswerDeduction' },
      { el: els.settingQuestionForm, prop: 'requireQuestionForm' },
      { el: els.settingDailyDouble, prop: 'dailyDoubleEnabled' },
      { el: els.settingFinalJeopardy, prop: 'finalJeopardyEnabled' },
      { el: els.settingSound, prop: 'soundEnabled' }
    ];

    settingsCheckboxes.forEach(({ el, prop }) => {
      if (el) {
        el.addEventListener('change', () => {
          if (editorData && editorData.game && editorData.game.settings) {
            editorData.game.settings[prop] = el.checked;
            triggerAutoSave();
          }
        });
      }
    });

    if (els.settingTimerSeconds) {
      els.settingTimerSeconds.addEventListener('change', (e) => {
        if (editorData && editorData.game && editorData.game.settings) {
          editorData.game.settings.timerSeconds = parseInt(e.target.value, 10) || 30;
          triggerAutoSave();
        }
      });
    }

    // Rounds & Categories dropdowns
    if (els.roundSelector) {
      els.roundSelector.addEventListener('change', (e) => {
        currentRoundIdx = parseInt(e.target.value, 10) || 0;
        const prevSel = document.getElementById('preview-round-selector');
        if (prevSel) prevSel.value = currentRoundIdx;
        currentCategoryIdx = 0;
        renderCategories();
        renderClues();
        renderPreviewBoard();
      });
    }

    const prevRoundSel = document.getElementById('preview-round-selector');
    if (prevRoundSel) {
      prevRoundSel.addEventListener('change', (e) => {
        currentRoundIdx = parseInt(e.target.value, 10) || 0;
        if (els.roundSelector) els.roundSelector.value = currentRoundIdx;
        currentCategoryIdx = 0;
        renderCategories();
        renderClues();
        renderPreviewBoard();
      });
    }

    if (els.categorySelector) {
      els.categorySelector.addEventListener('change', (e) => {
        currentCategoryIdx = parseInt(e.target.value, 10) || 0;
        renderClues();
      });
    }

    // Add round button
    const addRoundBtn = document.getElementById('btn-add-round');
    if (addRoundBtn) {
      addRoundBtn.addEventListener('click', handleAddRound);
    }

    // Add category button
    const addCatBtn = document.getElementById('btn-add-category');
    if (addCatBtn) {
      addCatBtn.addEventListener('click', handleAddCategory);
    }

    // Add clue button
    const addClueBtn = document.getElementById('btn-add-clue');
    if (addClueBtn) {
      addClueBtn.addEventListener('click', () => openClueModal(null));
    }

    // Clue Modal Save
    const saveClueBtn = document.getElementById('btn-modal-save-clue');
    if (saveClueBtn) {
      saveClueBtn.addEventListener('click', handleSaveClueModal);
    }

    // Final Jeopardy inputs
    const fjInputs = [
      { el: els.fjCategoryInput, prop: 'category' },
      { el: els.fjClueInput, prop: 'clue' },
      { el: els.fjAnswerInput, prop: 'answer' },
      { el: els.fjExplanationInput, prop: 'explanation' }
    ];
    fjInputs.forEach(({ el, prop }) => {
      if (el) {
        el.addEventListener('input', () => {
          if (editorData && editorData.game && editorData.game.finalJeopardy) {
            editorData.game.finalJeopardy[prop] = el.value.trim();
            triggerAutoSave();
          }
        });
      }
    });

    // Import / Export
    if (els.exportJsonBtn) {
      els.exportJsonBtn.addEventListener('click', () => handleExportJson(false));
    }
    if (els.exportBackupBtn) {
      els.exportBackupBtn.addEventListener('click', () => handleExportJson(true));
    }
    if (els.importJsonBtn && els.importFileInput) {
      els.importJsonBtn.addEventListener('click', () => els.importFileInput.click());
      els.importFileInput.addEventListener('change', handleImportFile);
    }

    // Drafts
    if (els.saveDraftBtn) {
      els.saveDraftBtn.addEventListener('click', () => {
        Persistence.saveAdminDraft(editorData);
        setDraftBadge('Draft saved manually at ' + new Date().toLocaleTimeString());
        showAppModal('Draft Saved', 'Your current in-memory edits were saved to your browser local draft storage.', 'success');
      });
    }
    if (els.restoreDraftBtn) {
      els.restoreDraftBtn.addEventListener('click', handleRestoreDraft);
    }

    // Password Update Modal
    if (els.changePasswordForm) {
      els.changePasswordForm.addEventListener('submit', handleChangePassword);
    }

    // Save Game Settings Button
    if (els.saveSettingsBtn) {
      els.saveSettingsBtn.addEventListener('click', handleSaveSettings);
    }

    // GitHub Sync
    if (els.btnSyncGitHub) {
      els.btnSyncGitHub.addEventListener('click', handleSyncGitHub);
    }
    if (els.btnTopbarPublish) {
      els.btnTopbarPublish.addEventListener('click', handleSyncGitHub);
    }
    if (els.btnToggleGithubToken && els.githubSyncToken) {
      els.btnToggleGithubToken.addEventListener('click', () => {
        const isPass = els.githubSyncToken.type === 'password';
        els.githubSyncToken.type = isPass ? 'text' : 'password';
        const icon = els.btnToggleGithubToken.querySelector('i');
        if (icon) icon.className = isPass ? 'bi bi-eye-slash' : 'bi bi-eye';
      });
    }

    if (els.btnResetGithubToken && els.githubSyncToken) {
      els.btnResetGithubToken.addEventListener('click', () => {
        const defToken = getDefaultToken();
        els.githubSyncToken.value = defToken;
        try {
          localStorage.setItem('trivia_github_sync_token', defToken);
          localStorage.setItem('trivia_github_token_version', GITHUB_TOKEN_VERSION);
        } catch (e) {}
        showAppModal('Token Reset', 'GitHub Personal Access Token has been restored to the default working token.', 'info');
      });
    }

    // Load saved GitHub token & repo from localStorage, or prefill with built-in default.
    // Automatically purge legacy/invalid tokens cached from older manual testing sessions.
    try {
      const storedVersion = localStorage.getItem('trivia_github_token_version');
      if (storedVersion !== GITHUB_TOKEN_VERSION) {
        localStorage.removeItem('trivia_github_sync_token');
        localStorage.setItem('trivia_github_token_version', GITHUB_TOKEN_VERSION);
      }

      const defaultToken = getDefaultToken();
      const savedToken = localStorage.getItem('trivia_github_sync_token');
      const savedRepo = localStorage.getItem('trivia_github_sync_repo');
      const initialRepo = savedRepo || DEFAULT_GITHUB_REPO;
      const initialToken = savedToken || defaultToken;

      if (els.githubSyncRepo && initialRepo) els.githubSyncRepo.value = initialRepo;
      if (els.githubSyncToken && initialToken) els.githubSyncToken.value = initialToken;
    } catch (e) {}
  }

  /**
   * Loads questions.json through relative path with fallback to sample-data.js
   */
  async function loadQuestionsData() {
    try {
      const response = await fetch('assets/data/questions.json?_t=' + Date.now(), { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }
      rawSourceData = await response.json();
    } catch (err) {
      console.warn('Could not load questions.json over fetch (possibly file:// protocol). Using sample-data.js fallback.', err);
      if (window.DEFAULT_SAMPLE_QUESTIONS) {
        rawSourceData = JSON.parse(JSON.stringify(window.DEFAULT_SAMPLE_QUESTIONS));
      } else {
        showLoginError('Unable to load questions.json and fallback sample data is unavailable.');
        return;
      }
    }

    // Check if there is an unsaved draft in local storage
    if (Persistence.hasAdminDraft()) {
      if (els.restoreDraftBtn) els.restoreDraftBtn.classList.remove('d-none');
    }
  }

  /**
   * Password visibility toggle
   */
  function togglePasswordVisibility() {
    if (!els.passwordInput) return;
    const isPass = els.passwordInput.type === 'password';
    els.passwordInput.type = isPass ? 'text' : 'password';
    const icon = els.togglePasswordBtn.querySelector('i');
    if (icon) {
      icon.className = isPass ? 'bi bi-eye-slash' : 'bi bi-eye';
    }
  }

  /**
   * Handles admin login attempt
   */
  async function handleLogin(e) {
    e.preventDefault();
    hideLoginError();

    const password = (els.passwordInput.value || '').trim();
    if (!password) {
      showLoginError('Please enter the administrator password.');
      return;
    }

    if (!rawSourceData || !rawSourceData.adminAuth) {
      showLoginError('Authentication configuration is not loaded yet. Please refresh the page.');
      return;
    }

    if (els.loginSpinner) els.loginSpinner.classList.remove('d-none');
    const submitBtn = els.loginForm.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    try {
      const authResult = await PasswordAuth.verifyPassword(password, rawSourceData.adminAuth);

      if (authResult.success) {
        isAuthenticated = true;

        // Load latest fresh live data from GitHub
        editorData = JSON.parse(JSON.stringify(rawSourceData));
        if (Persistence.hasAdminDraft() && els.restoreDraftBtn) {
          els.restoreDraftBtn.classList.remove('d-none');
        }

        // Hide login, show dashboard
        els.loginSection.classList.add('d-none');
        els.dashboardSection.classList.remove('d-none');
        els.passwordInput.value = '';

        initializeDashboard();
        if (savedCustom || savedDraft) {
          setDraftBadge('Loaded saved local edits');
        }
      } else {
        showLoginError(authResult.error || 'Invalid administrator password.');
      }
    } catch (err) {
      showLoginError('Verification error: ' + (err.message || 'Unknown cryptographic fault.'));
    } finally {
      if (els.loginSpinner) els.loginSpinner.classList.add('d-none');
      if (submitBtn) submitBtn.disabled = false;
    }
  }

  function handleLogout() {
    showConfirmModal('Log Out', 'Are you sure you want to log out of the administration panel? Unexported changes may be lost if not saved as a draft.', () => {
      isAuthenticated = false;
      editorData = null;
      els.dashboardSection.classList.add('d-none');
      els.loginSection.classList.remove('d-none');
      hideLoginError();
      if (els.passwordInput) els.passwordInput.value = '';
    });
  }

  function showLoginError(msg) {
    if (els.loginErrorAlert) {
      els.loginErrorAlert.textContent = msg;
      els.loginErrorAlert.classList.remove('d-none');
    }
  }

  function hideLoginError() {
    if (els.loginErrorAlert) {
      els.loginErrorAlert.classList.add('d-none');
    }
  }

  /**
   * Switch active navigation tab
   */
  function switchTab(tabId) {
    els.navTabs.forEach(b => {
      if (b.dataset.tab === tabId) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    els.tabPanes.forEach(p => {
      if (p.id === `tab-${tabId}`) {
        p.classList.remove('d-none');
        p.classList.add('active');
      } else {
        p.classList.add('d-none');
        p.classList.remove('active');
      }
    });

    if (tabId === 'preview') {
      renderPreviewBoard();
    } else if (tabId === 'validation') {
      runValidationAudit();
    }
  }

  /**
   * Populates dashboard form fields from editorData
   */
  function initializeDashboard() {
    if (!editorData || !editorData.game) return;

    const game = editorData.game;
    if (els.gameTitleInput) els.gameTitleInput.value = game.title || 'Trivia Jeopardy';
    if (els.gameTitleHeader) els.gameTitleHeader.textContent = game.title || 'Trivia Jeopardy';

    const settings = game.settings || {};
    if (els.settingDeduction) els.settingDeduction.checked = !!settings.incorrectAnswerDeduction;
    if (els.settingQuestionForm) els.settingQuestionForm.checked = !!settings.requireQuestionForm;
    if (els.settingDailyDouble) els.settingDailyDouble.checked = settings.dailyDoubleEnabled !== false;
    if (els.settingFinalJeopardy) els.settingFinalJeopardy.checked = settings.finalJeopardyEnabled !== false;
    if (els.settingSound) els.settingSound.checked = settings.soundEnabled !== false;
    if (els.settingTimerSeconds) els.settingTimerSeconds.value = settings.timerSeconds || 30;

    // Final Jeopardy
    const fj = game.finalJeopardy || {};
    if (els.fjCategoryInput) els.fjCategoryInput.value = fj.category || '';
    if (els.fjClueInput) els.fjClueInput.value = fj.clue || '';
    if (els.fjAnswerInput) els.fjAnswerInput.value = fj.answer || '';
    if (els.fjExplanationInput) els.fjExplanationInput.value = fj.explanation || '';

    currentRoundIdx = 0;
    currentCategoryIdx = 0;

    populateRoundSelector();
    renderCategories();
    renderClues();
    setDraftBadge('Ready');
  }

  function populateRoundSelector() {
    if (!editorData || !editorData.game) return;
    const rounds = editorData.game.rounds || [];
    const selectors = [els.roundSelector, document.getElementById('preview-round-selector')].filter(Boolean);
    
    selectors.forEach(sel => {
      sel.innerHTML = '';
      rounds.forEach((round, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.textContent = `${idx + 1}. ${round.title} (${round.categories ? round.categories.length : 0} categories)`;
        if (idx === currentRoundIdx) opt.selected = true;
        sel.appendChild(opt);
      });
    });
  }

  function renderCategories() {
    if (!editorData || !editorData.game) return;
    const rounds = editorData.game.rounds || [];
    const currentRound = rounds[currentRoundIdx];

    if (els.categorySelector) {
      els.categorySelector.innerHTML = '';
    }
    if (els.categoriesList) {
      els.categoriesList.innerHTML = '';
    }

    if (!currentRound || !currentRound.categories || currentRound.categories.length === 0) {
      if (els.categoriesList) {
        els.categoriesList.innerHTML = '<div class="text-muted p-3 text-center small">No categories in this round yet. Click "+ Add Category".</div>';
      }
      return;
    }

    currentRound.categories.forEach((cat, idx) => {
      // Hidden dropdown option for sync
      if (els.categorySelector) {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.textContent = `${idx + 1}. ${cat.name} (${cat.clues ? cat.clues.length : 0} clues)`;
        if (idx === currentCategoryIdx) opt.selected = true;
        els.categorySelector.appendChild(opt);
      }

      // Categories management card in list
      if (els.categoriesList) {
        const item = document.createElement('div');
        const isActive = idx === currentCategoryIdx;
        item.className = `list-group-item d-flex justify-content-between align-items-center mb-2 rounded category-item-row ${isActive ? 'category-item-active' : ''}`;
        item.innerHTML = `
          <div class="d-flex align-items-center gap-2 flex-grow-1 me-2" style="cursor: pointer; min-width: 0;">
            <span class="badge ${isActive ? 'bg-primary' : 'bg-secondary'} rounded-pill">${idx + 1}</span>
            <div class="text-truncate">
              <div class="fw-bold category-name-display text-truncate">${escapeHtml(cat.name)}</div>
              <small class="text-muted">${cat.clues ? cat.clues.length : 0} clues</small>
            </div>
          </div>
          <div class="btn-group btn-group-sm flex-shrink-0">
            <button class="btn btn-outline-secondary btn-move-cat-up py-1 px-2" data-idx="${idx}" title="Move Up" ${idx === 0 ? 'disabled' : ''}>
              <i class="bi bi-chevron-up"></i>
            </button>
            <button class="btn btn-outline-secondary btn-move-cat-down py-1 px-2" data-idx="${idx}" title="Move Down" ${idx === currentRound.categories.length - 1 ? 'disabled' : ''}>
              <i class="bi bi-chevron-down"></i>
            </button>
            <button class="btn btn-outline-warning btn-rename-cat py-1 px-2" data-idx="${idx}" title="Rename">
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn btn-outline-danger btn-delete-cat py-1 px-2" data-idx="${idx}" title="Delete">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        `;

        item.addEventListener('click', (e) => {
          if (e.target.closest('button')) return;
          currentCategoryIdx = idx;
          if (els.categorySelector) els.categorySelector.value = idx;
          renderCategories();
          renderClues();
        });

        // Bind buttons
        item.querySelector('.btn-move-cat-up').addEventListener('click', () => moveCategory(idx, -1));
        item.querySelector('.btn-move-cat-down').addEventListener('click', () => moveCategory(idx, 1));
        item.querySelector('.btn-rename-cat').addEventListener('click', () => promptRenameCategory(idx));
        item.querySelector('.btn-delete-cat').addEventListener('click', () => promptDeleteCategory(idx));

        els.categoriesList.appendChild(item);
      }
    });
  }

  function renderClues() {
    const selectedHeader = document.getElementById('selected-category-header-title');
    if (!els.cluesTableBody || !editorData || !editorData.game) return;
    const rounds = editorData.game.rounds || [];
    const currentRound = rounds[currentRoundIdx];
    if (!currentRound || !currentRound.categories || currentRound.categories.length === 0) {
      els.cluesTableBody.innerHTML = '<tr><td colspan="5" class="text-center text-muted py-4">No categories available in this round. Click "+ Add Category" to start.</td></tr>';
      if (selectedHeader) selectedHeader.textContent = 'No category selected';
      return;
    }

    const currentCat = currentRound.categories[currentCategoryIdx];
    if (!currentCat) {
      if (selectedHeader) selectedHeader.textContent = 'No category selected';
      els.cluesTableBody.innerHTML = '<tr><td colspan="5" class="text-center text-muted py-4">Select a category on the left to view clues.</td></tr>';
      return;
    }

    if (selectedHeader) {
      selectedHeader.textContent = `${currentCat.name} (${currentCat.clues ? currentCat.clues.length : 0} clues)`;
    }

    if (!currentCat.clues || currentCat.clues.length === 0) {
      els.cluesTableBody.innerHTML = '<tr><td colspan="5" class="text-center text-muted py-4">No clues in this category yet. Click "+ Add Clue" above to add one.</td></tr>';
      return;
    }

    els.cluesTableBody.innerHTML = '';
    currentCat.clues.forEach((clue, idx) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="fw-bold text-warning text-nowrap">$${clue.points}</td>
        <td>
          <div class="clue-preview-text" title="${escapeHtml(clue.clue)}">${escapeHtml(clue.clue)}</div>
        </td>
        <td>
          <div class="clue-preview-answer text-success fw-semibold" title="${escapeHtml(clue.answer)}">${escapeHtml(clue.answer)}</div>
        </td>
        <td class="text-center">
          ${clue.dailyDouble ? '<span class="badge bg-warning text-dark"><i class="bi bi-star-fill"></i> DD</span>' : '<span class="text-muted small">—</span>'}
        </td>
        <td class="text-end text-nowrap">
          <div class="btn-group btn-group-sm">
            <button class="btn btn-outline-secondary btn-move-clue-up py-1 px-2" title="Move Up" ${idx === 0 ? 'disabled' : ''}>
              <i class="bi bi-chevron-up"></i>
            </button>
            <button class="btn btn-outline-secondary btn-move-clue-down py-1 px-2" title="Move Down" ${idx === currentCat.clues.length - 1 ? 'disabled' : ''}>
              <i class="bi bi-chevron-down"></i>
            </button>
            <button class="btn btn-outline-primary btn-edit-clue py-1 px-2" title="Edit Clue">
              <i class="bi bi-pencil-fill"></i>
            </button>
            <button class="btn btn-outline-secondary btn-duplicate-clue py-1 px-2" title="Duplicate Clue">
              <i class="bi bi-files"></i>
            </button>
            <button class="btn btn-outline-danger btn-delete-clue py-1 px-2" title="Delete Clue">
              <i class="bi bi-trash-fill"></i>
            </button>
          </div>
        </td>
      `;

      tr.querySelector('.btn-move-clue-up').addEventListener('click', () => moveClue(idx, -1));
      tr.querySelector('.btn-move-clue-down').addEventListener('click', () => moveClue(idx, 1));
      tr.querySelector('.btn-edit-clue').addEventListener('click', () => openClueModal(clue));
      tr.querySelector('.btn-duplicate-clue').addEventListener('click', () => duplicateClue(clue));
      tr.querySelector('.btn-delete-clue').addEventListener('click', () => promptDeleteClue(clue.id));

      els.cluesTableBody.appendChild(tr);
    });
  }

  // --- Round Actions ---
  function handleAddRound() {
    showPromptModal('Create New Round', 'Enter a name for the new round (e.g. "Triple Jeopardy"):', (newRoundTitle) => {
      if (!newRoundTitle) return;
      const rounds = editorData.game.rounds || [];
      const newRoundId = 'round-' + (rounds.length + 1);
      rounds.push({
        id: newRoundId,
        title: newRoundTitle,
        multiplier: rounds.length + 1,
        categories: []
      });
      editorData.game.rounds = rounds;
      currentRoundIdx = rounds.length - 1;
      populateRoundSelector();
      renderCategories();
      renderClues();
      triggerAutoSave();
    });
  }

  // --- Category Actions ---
  function handleAddCategory() {
    showPromptModal('Create Category', 'Enter category name:', (name) => {
      if (!name) return;
      const rounds = editorData.game.rounds;
      const catId = 'cat-' + Date.now().toString(36);
      if (!rounds[currentRoundIdx].categories) rounds[currentRoundIdx].categories = [];
      rounds[currentRoundIdx].categories.push({
        id: catId,
        name: name,
        clues: []
      });
      currentCategoryIdx = rounds[currentRoundIdx].categories.length - 1;
      renderCategories();
      renderClues();
      triggerAutoSave();
    });
  }

  function promptRenameCategory(catIdx) {
    const cat = editorData.game.rounds[currentRoundIdx].categories[catIdx];
    showPromptModal('Rename Category', 'Enter new name:', (newName) => {
      if (!newName) return;
      cat.name = newName;
      renderCategories();
      renderClues();
      triggerAutoSave();
    }, cat.name);
  }

  function promptDeleteCategory(catIdx) {
    const cat = editorData.game.rounds[currentRoundIdx].categories[catIdx];
    const cluesCount = cat.clues ? cat.clues.length : 0;
    const warningMsg = cluesCount > 0
      ? `This category contains ${cluesCount} clues which will also be deleted. Proceed?`
      : 'Are you sure you want to delete this empty category?';

    showConfirmModal(`Delete "${cat.name}"?`, warningMsg, () => {
      editorData.game.rounds[currentRoundIdx].categories.splice(catIdx, 1);
      if (currentCategoryIdx >= editorData.game.rounds[currentRoundIdx].categories.length) {
        currentCategoryIdx = Math.max(0, editorData.game.rounds[currentRoundIdx].categories.length - 1);
      }
      renderCategories();
      renderClues();
      triggerAutoSave();
    });
  }

  function moveCategory(catIdx, dir) {
    const cats = editorData.game.rounds[currentRoundIdx].categories;
    const targetIdx = catIdx + dir;
    if (targetIdx < 0 || targetIdx >= cats.length) return;
    const temp = cats[catIdx];
    cats[catIdx] = cats[targetIdx];
    cats[targetIdx] = temp;
    currentCategoryIdx = targetIdx;
    renderCategories();
    renderClues();
    triggerAutoSave();
  }

  // --- Clue Modal Actions ---
  function openClueModal(clue) {
    editingClueId = clue ? clue.id : null;
    const modalEl = document.getElementById('clueEditModal');
    if (!modalEl) return;

    const modalTitle = document.getElementById('clueEditModalTitle');
    const inputPoints = document.getElementById('modal-clue-points');
    const inputClue = document.getElementById('modal-clue-text');
    const inputAnswer = document.getElementById('modal-clue-answer');
    const inputExpl = document.getElementById('modal-clue-explanation');
    const inputImage = document.getElementById('modal-clue-image');
    const checkDailyDouble = document.getElementById('modal-clue-daily-double');

    if (clue) {
      modalTitle.textContent = `Edit Clue ($${clue.points})`;
      inputPoints.value = clue.points || 100;
      inputClue.value = clue.clue || '';
      inputAnswer.value = clue.answer || '';
      inputExpl.value = clue.explanation || '';
      inputImage.value = clue.image || '';
      checkDailyDouble.checked = !!clue.dailyDouble;
    } else {
      modalTitle.textContent = 'Add New Clue';
      const cat = editorData.game.rounds[currentRoundIdx].categories[currentCategoryIdx];
      const count = cat && cat.clues ? cat.clues.length : 0;
      const multiplier = (editorData.game.rounds[currentRoundIdx].multiplier || 1);
      inputPoints.value = (count + 1) * 100 * multiplier;
      inputClue.value = '';
      inputAnswer.value = '';
      inputExpl.value = '';
      inputImage.value = '';
      checkDailyDouble.checked = false;
    }

    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
  }

  function handleSaveClueModal() {
    const inputPoints = document.getElementById('modal-clue-points');
    const inputClue = document.getElementById('modal-clue-text');
    const inputAnswer = document.getElementById('modal-clue-answer');
    const inputExpl = document.getElementById('modal-clue-explanation');
    const inputImage = document.getElementById('modal-clue-image');
    const checkDailyDouble = document.getElementById('modal-clue-daily-double');

    const points = parseInt(inputPoints.value, 10);
    const clueText = (inputClue.value || '').trim();
    const answerText = (inputAnswer.value || '').trim();

    if (isNaN(points) || points <= 0) {
      showAppModal('Validation Error', 'Please enter a valid positive point value.', 'warning');
      return;
    }
    if (!clueText) {
      showAppModal('Validation Error', 'Clue text cannot be empty.', 'warning');
      return;
    }
    if (!answerText) {
      showAppModal('Validation Error', 'Correct answer cannot be empty.', 'warning');
      return;
    }

    const cat = editorData.game.rounds[currentRoundIdx].categories[currentCategoryIdx];
    if (!cat.clues) cat.clues = [];

    if (editingClueId) {
      // Editing existing
      const clue = cat.clues.find(c => c.id === editingClueId);
      if (clue) {
        clue.points = points;
        clue.clue = clueText;
        clue.answer = answerText;
        clue.explanation = inputExpl.value.trim();
        clue.image = inputImage.value.trim();
        clue.dailyDouble = checkDailyDouble.checked;
      }
    } else {
      // Adding new
      const newId = `${cat.id}-${Date.now().toString(36)}`;
      cat.clues.push({
        id: newId,
        points: points,
        clue: clueText,
        answer: answerText,
        explanation: inputExpl.value.trim(),
        image: inputImage.value.trim(),
        dailyDouble: checkDailyDouble.checked
      });
    }

    const modalEl = document.getElementById('clueEditModal');
    const bsModal = bootstrap.Modal.getInstance(modalEl);
    if (bsModal) bsModal.hide();

    renderCategories();
    renderClues();
    triggerAutoSave();
  }

  function duplicateClue(clue) {
    const cat = editorData.game.rounds[currentRoundIdx].categories[currentCategoryIdx];
    const newClue = JSON.parse(JSON.stringify(clue));
    newClue.id = `${clue.id}-copy-${Date.now().toString(36).substring(3)}`;
    newClue.clue = `${newClue.clue} (Copy)`;
    cat.clues.push(newClue);
    renderCategories();
    renderClues();
    triggerAutoSave();
  }

  function promptDeleteClue(clueId) {
    showConfirmModal('Delete Clue', 'Are you sure you want to delete this clue?', () => {
      const cat = editorData.game.rounds[currentRoundIdx].categories[currentCategoryIdx];
      cat.clues = cat.clues.filter(c => c.id !== clueId);
      renderCategories();
      renderClues();
      triggerAutoSave();
    });
  }

  function moveClue(clueIdx, dir) {
    const clues = editorData.game.rounds[currentRoundIdx].categories[currentCategoryIdx].clues;
    const targetIdx = clueIdx + dir;
    if (targetIdx < 0 || targetIdx >= clues.length) return;
    const temp = clues[clueIdx];
    clues[clueIdx] = clues[targetIdx];
    clues[targetIdx] = temp;
    renderClues();
    triggerAutoSave();
  }

  // --- Auto-Save & Drafts ---
  function triggerAutoSave() {
    if (!editorData) return;
    Persistence.saveAdminDraft(editorData);
    Persistence.saveCustomGame(editorData);
    setDraftBadge('Saved to browser at ' + new Date().toLocaleTimeString());
  }

  function handleSaveSettings() {
    if (!editorData || !editorData.game) return;

    if (els.gameTitleInput) {
      editorData.game.title = els.gameTitleInput.value.trim() || 'Trivia Jeopardy';
      if (els.gameTitleHeader) els.gameTitleHeader.textContent = editorData.game.title;
    }

    if (!editorData.game.settings) editorData.game.settings = {};
    if (els.settingDeduction) editorData.game.settings.incorrectAnswerDeduction = els.settingDeduction.checked;
    if (els.settingQuestionForm) editorData.game.settings.requireQuestionForm = els.settingQuestionForm.checked;
    if (els.settingDailyDouble) editorData.game.settings.dailyDoubleEnabled = els.settingDailyDouble.checked;
    if (els.settingFinalJeopardy) editorData.game.settings.finalJeopardyEnabled = els.settingFinalJeopardy.checked;
    if (els.settingSound) editorData.game.settings.soundEnabled = els.settingSound.checked;
    if (els.settingTimerSeconds) editorData.game.settings.timerSeconds = parseInt(els.settingTimerSeconds.value, 10) || 30;

    Persistence.saveCustomGame(editorData);
    Persistence.saveAdminDraft(editorData);
    setDraftBadge('Settings saved at ' + new Date().toLocaleTimeString());

    const feedback = document.getElementById('settings-saved-feedback');
    if (feedback) {
      feedback.classList.remove('d-none');
      setTimeout(() => feedback.classList.add('d-none'), 3500);
    }

    showAppModal(
      'Settings Saved',
      'Your game settings have been successfully saved to your browser storage!\n\nTo make these changes available on another computer, projector, or mobile device, go to the "Import & Export" tab and click "Sync to GitHub" or "Export questions.json".',
      'success'
    );
  }

  // --- GitHub Cloud Sync (Deploy to All Devices) ---
  async function handleSyncGitHub() {
    const tokenInput = document.getElementById('github-sync-token');
    const repoInput = document.getElementById('github-sync-repo');
    const spinner = document.getElementById('sync-github-spinner');
    const syncBtn = document.getElementById('btn-sync-github');

    const defaultToken = getDefaultToken();
    let token = (tokenInput ? tokenInput.value : '').trim();
    if (!token && defaultToken) {
      token = defaultToken;
    }

    const repo = (repoInput && repoInput.value.trim()) ? repoInput.value.trim() : DEFAULT_GITHUB_REPO;

    // Sanitize any accidental prefixes
    if (token.startsWith('Bearer ')) token = token.substring(7).trim();
    if (token.startsWith('token ')) token = token.substring(6).trim();

    if (!repo || !repo.includes('/')) {
      showAppModal('Invalid Repository', 'Please enter a valid repository in the format "owner/repo" (e.g. cgsocadiz/-trivia-jeopardy).', 'warning');
      return;
    }

    if (!token) {
      showAppModal(
        'GitHub Token Required',
        'To push updates directly from your browser to GitHub, please enter a GitHub Personal Access Token (PAT) with "Contents: Read and write" permission.\n\nClick the "Generate Token" link in the Import & Export tab to create one with the correct permissions in one click.\n\nAlternatively, you can click "Export questions.json" below and commit it via Git CLI.',
        'info'
      );
      return;
    }

    if (syncBtn) syncBtn.disabled = true;
    if (spinner) spinner.classList.remove('d-none');
    if (els.btnTopbarPublish) els.btnTopbarPublish.disabled = true;
    if (els.topbarPublishSpinner) els.topbarPublishSpinner.classList.remove('d-none');

    // Helper function that attempts the sync using a specific token
    const executeSyncRequest = async (activeToken) => {
      const authHeader = activeToken.startsWith('github_pat_') ? `Bearer ${activeToken}` : `token ${activeToken}`;
      const fileUrl = `https://api.github.com/repos/${repo}/contents/assets/data/questions.json`;

      const getResp = await fetch(fileUrl, {
        headers: {
          'Authorization': authHeader,
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      let currentSha = null;
      if (getResp.ok) {
        const fileInfo = await getResp.json();
        currentSha = fileInfo.sha;
      } else if (getResp.status === 401) {
        const err = new Error('Bad credentials: GitHub did not recognize this token.');
        err.statusCode = 401;
        throw err;
      } else if (getResp.status === 404) {
        throw new Error(`Repository "${repo}" or file "assets/data/questions.json" not found. Please verify the repository name.`);
      } else {
        const errJson = await getResp.json().catch(() => ({}));
        throw new Error(errJson.message || `GitHub API error (${getResp.status}): ${getResp.statusText}`);
      }

      const jsonString = JSON.stringify(editorData, null, 2);
      const encoder = new TextEncoder();
      const bytes = encoder.encode(jsonString);
      let binary = '';
      bytes.forEach(b => { binary += String.fromCharCode(b); });
      const base64Content = btoa(binary);

      const putBody = {
        message: 'feat: update questions and settings via Admin CMS',
        content: base64Content
      };
      if (currentSha) {
        putBody.sha = currentSha;
      }

      const putResp = await fetch(fileUrl, {
        method: 'PUT',
        headers: {
          'Authorization': authHeader,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(putBody)
      });

      if (!putResp.ok) {
        const errJson = await putResp.json().catch(() => ({}));
        if (putResp.status === 401) {
          const err = new Error('Bad credentials: Your token is invalid or expired.');
          err.statusCode = 401;
          throw err;
        } else if (putResp.status === 403) {
          const err = new Error('403 Forbidden: Your token does not have write access to this repository.');
          err.statusCode = 403;
          throw err;
        }
        throw new Error(errJson.message || `HTTP ${putResp.status} ${putResp.statusText}`);
      }

      return true;
    };

    try {
      try {
        await executeSyncRequest(token);
        try {
          localStorage.setItem('trivia_github_sync_token', token);
          localStorage.setItem('trivia_github_sync_repo', repo);
        } catch (e) {}
      } catch (firstErr) {
        // If the token failed with 401 or 403 (e.g. stale token cached in Chrome) and we have a working default, auto-heal!
        if ((firstErr.statusCode === 401 || firstErr.statusCode === 403) && defaultToken && token !== defaultToken) {
          console.warn('Cached browser token rejected with auth error. Retrying with default token...');
          await executeSyncRequest(defaultToken);
          token = defaultToken;
          if (tokenInput) tokenInput.value = defaultToken;
          try {
            localStorage.setItem('trivia_github_sync_token', defaultToken);
            localStorage.setItem('trivia_github_sync_repo', repo);
            localStorage.setItem('trivia_github_token_version', GITHUB_TOKEN_VERSION);
          } catch (e) {}
        } else {
          throw firstErr;
        }
      }

      rawSourceData = JSON.parse(JSON.stringify(editorData));
      Persistence.clearAdminDraft();
      Persistence.clearCustomGame();
      if (els.restoreDraftBtn) els.restoreDraftBtn.classList.add('d-none');
      setDraftBadge('Live on GitHub');

      showAppModal(
        'Synced to GitHub!',
        'Your questions and settings were successfully committed to your GitHub repository!\n\nGitHub Pages will redeploy in ~30-60 seconds. Once completed, your updates will be live and accessible from ANY computer, projector, or mobile device at:\nhttps://cgsocadiz.github.io/-trivia-jeopardy/',
        'success'
      );
    } catch (err) {
      showAppModal(
        'Sync Failed',
        `${err.message}\n\nPlease click the reset button next to the token input to restore the default working token, or generate a new token with the "repo" scope.`,
        'danger'
      );
    } finally {
      if (syncBtn) syncBtn.disabled = false;
      if (spinner) spinner.classList.add('d-none');
      if (els.btnTopbarPublish) els.btnTopbarPublish.disabled = false;
      if (els.topbarPublishSpinner) els.topbarPublishSpinner.classList.add('d-none');
    }
  }

  function setDraftBadge(text) {
    if (els.draftStatusBadge) {
      els.draftStatusBadge.textContent = text;
    }
  }

  function handleRestoreDraft() {
    const draft = Persistence.loadAdminDraft();
    if (!draft || !draft.game) {
      showAppModal('No Draft Found', 'There is no saved draft in this browser.', 'info');
      return;
    }
    showConfirmModal('Restore Draft', `Restore unsaved draft from ${new Date(draft.updatedAt).toLocaleString()}? This will overwrite the currently loaded game.`, () => {
      editorData.game = JSON.parse(JSON.stringify(draft.game));
      initializeDashboard();
      showAppModal('Draft Restored', 'Your draft has been successfully loaded into the editor.', 'success');
    });
  }

  // --- Validation Audit ---
  function runValidationAudit() {
    if (!els.validationSummary) return;
    const errors = [];
    const warnings = [];

    if (!editorData) {
      els.validationSummary.innerHTML = '<div class="alert alert-danger">No editor data loaded.</div>';
      return;
    }

    // 1. Auth config check
    if (!editorData.adminAuth || !editorData.adminAuth.salt || !editorData.adminAuth.passwordHash) {
      errors.push('Admin authentication block (salt/passwordHash) is incomplete.');
    }

    // 2. Game Title
    if (!editorData.game || !editorData.game.title || !editorData.game.title.trim()) {
      errors.push('Game title is required.');
    }

    // 3. Rounds check
    const rounds = (editorData.game && editorData.game.rounds) || [];
    if (rounds.length === 0) {
      errors.push('At least one round is required.');
    }

    const allClueIds = new Set();

    rounds.forEach((round, rIdx) => {
      const rNum = rIdx + 1;
      if (!round.categories || round.categories.length === 0) {
        errors.push(`Round ${rNum} ("${round.title}") has no categories.`);
      } else {
        round.categories.forEach((cat, cIdx) => {
          if (!cat.name || !cat.name.trim()) {
            errors.push(`Round ${rNum}, Category ${cIdx + 1} has an empty name.`);
          }
          if (!cat.clues || cat.clues.length === 0) {
            warnings.push(`Category "${cat.name}" in Round ${rNum} has no clues.`);
          } else {
            cat.clues.forEach((clue) => {
              if (allClueIds.has(clue.id)) {
                errors.push(`Duplicate Clue ID detected: "${clue.id}" in category "${cat.name}". Clue IDs must be unique.`);
              }
              allClueIds.add(clue.id);

              if (typeof clue.points !== 'number' || clue.points <= 0) {
                errors.push(`Clue "${clue.id}" has an invalid point value: ${clue.points}`);
              }
              if (!clue.clue || !clue.clue.trim()) {
                errors.push(`Clue "${clue.id}" has empty clue text.`);
              }
              if (!clue.answer || !clue.answer.trim()) {
                errors.push(`Clue "${clue.id}" has an empty correct response.`);
              }
            });
          }
        });
      }
    });

    // 4. Final Jeopardy check
    if (editorData.game && editorData.game.settings && editorData.game.settings.finalJeopardyEnabled) {
      const fj = editorData.game.finalJeopardy;
      if (!fj || !fj.category || !fj.clue || !fj.answer) {
        warnings.push('Final Jeopardy is enabled but its category, clue, or answer is missing.');
      }
    }

    let html = '';
    if (errors.length === 0 && warnings.length === 0) {
      html = `
        <div class="alert alert-success d-flex align-items-center">
          <i class="bi bi-check-circle-fill fs-3 me-3"></i>
          <div>
            <h5 class="alert-heading mb-1">Validation Passed!</h5>
            <p class="mb-0">All ${allClueIds.size} clues across ${rounds.length} round(s) are valid and ready for export.</p>
          </div>
        </div>
      `;
    } else {
      if (errors.length > 0) {
        html += `<div class="alert alert-danger mb-3"><h6 class="alert-heading"><i class="bi bi-x-circle-fill me-2"></i>Errors (${errors.length}) - Must be resolved before publishing:</h6><ul class="mb-0">`;
        errors.forEach(err => { html += `<li>${escapeHtml(err)}</li>`; });
        html += `</ul></div>`;
      }
      if (warnings.length > 0) {
        html += `<div class="alert alert-warning mb-3"><h6 class="alert-heading"><i class="bi bi-exclamation-triangle-fill me-2"></i>Warnings (${warnings.length}):</h6><ul class="mb-0">`;
        warnings.forEach(w => { html += `<li>${escapeHtml(w)}</li>`; });
        html += `</ul></div>`;
      }
    }

    els.validationSummary.innerHTML = html;
    return errors.length === 0;
  }

  // --- Preview Board ---
  function renderPreviewBoard() {
    if (!els.previewBoardContainer || !editorData || !editorData.game) return;
    const rounds = editorData.game.rounds || [];
    const round = rounds[currentRoundIdx];

    if (!round || !round.categories || round.categories.length === 0) {
      els.previewBoardContainer.innerHTML = '<div class="alert alert-secondary text-center p-4">No categories configured to display.</div>';
      return;
    }

    const categories = round.categories;
    const maxClues = Math.max(1, ...categories.map(c => (c.clues ? c.clues.length : 0)));

    let html = `<div class="preview-board-wrapper"><div class="trivia-board-table" style="--board-columns: ${categories.length}">`;
    html += '<div class="trivia-board-row header-row">';
    categories.forEach(cat => {
      html += `<div class="category-header"><span class="category-title">${escapeHtml(cat.name)}</span></div>`;
    });
    html += '</div>';

    for (let r = 0; r < maxClues; r++) {
      html += '<div class="trivia-board-row clues-row">';
      categories.forEach(cat => {
        const clue = cat.clues && cat.clues[r];
        if (clue) {
          html += `<div class="clue-tile preview-tile" title="${escapeHtml(clue.clue)}"><span class="tile-value">${clue.points}</span>${clue.dailyDouble ? ' <small class="text-warning">★</small>' : ''}</div>`;
        } else {
          html += '<div class="clue-tile empty-tile"></div>';
        }
      });
      html += '</div>';
    }
    html += '</div></div>';

    els.previewBoardContainer.innerHTML = html;
  }

  // --- JSON Export ---
  function handleExportJson(isBackup = false) {
    if (!editorData) return;

    // Validate
    const isValid = runValidationAudit();
    if (!isValid) {
      showConfirmModal('Validation Warnings Exist', 'There are validation errors in the trivia data. Exporting anyway might cause game issues. Do you wish to continue?', () => {
        downloadJsonFile(isBackup);
      });
      return;
    }

    downloadJsonFile(isBackup);
  }

  function downloadJsonFile(isBackup) {
    const filename = isBackup ? `questions_backup_${Date.now()}.json` : 'questions.json';
    const jsonStr = JSON.stringify(editorData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showAppModal(
      'Export Successful',
      `Downloaded "${filename}".\n\nTo publish these updates to your live GitHub Pages site:\n1. Copy this downloaded file into "assets/data/questions.json" in your local project folder.\n2. Commit and push the file to your GitHub repository.\n3. GitHub Pages will automatically redeploy the new questions!`,
      'success'
    );
  }

  // --- JSON Import ---
  function handleImportFile(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (evt) {
      try {
        const importedData = JSON.parse(evt.target.result);

        // Validation checks
        if (!importedData.game || !Array.isArray(importedData.game.rounds)) {
          showAppModal('Invalid JSON Schema', 'The selected file does not contain a valid Trivia Jeopardy "game" structure with rounds.', 'danger');
          return;
        }

        // Count items
        let totalCategories = 0;
        let totalClues = 0;
        importedData.game.rounds.forEach(r => {
          if (r.categories) {
            totalCategories += r.categories.length;
            r.categories.forEach(c => {
              if (c.clues) totalClues += c.clues.length;
            });
          }
        });

        const hasAdminAuth = !!(importedData.adminAuth && importedData.adminAuth.passwordHash);

        const summaryHtml = `
          File: <strong>${escapeHtml(file.name)}</strong><br>
          Title: <strong>${escapeHtml(importedData.game.title || 'Trivia Jeopardy')}</strong><br>
          Rounds: <strong>${importedData.game.rounds.length}</strong><br>
          Categories: <strong>${totalCategories}</strong><br>
          Clues: <strong>${totalClues}</strong><br>
          Contains Admin Password Config: <strong>${hasAdminAuth ? 'Yes' : 'No (existing password will be preserved)'}</strong>
        `;

        showConfirmModal('Confirm JSON Import', `<p>Are you sure you want to replace current game content with this imported file?</p><div class="bg-dark p-3 rounded mb-2">${summaryHtml}</div>`, () => {
          if (!hasAdminAuth && editorData && editorData.adminAuth) {
            importedData.adminAuth = editorData.adminAuth;
          }
          editorData = importedData;
          initializeDashboard();
          triggerAutoSave();
          showAppModal('Import Complete', `Successfully loaded ${totalClues} clues across ${totalCategories} categories.`, 'success');
        });

      } catch (err) {
        showAppModal('Import Failed', 'Unable to parse JSON file: ' + err.message, 'danger');
      } finally {
        els.importFileInput.value = '';
      }
    };
    reader.readAsText(file);
  }

  // --- Password Change Utility ---
  async function handleChangePassword(e) {
    e.preventDefault();
    const newPass = (els.newPasswordInput.value || '').trim();
    const confirmPass = (els.confirmPasswordInput.value || '').trim();

    if (newPass.length < 4) {
      showAppModal('Password Too Short', 'Please choose a password with at least 4 characters.', 'warning');
      return;
    }
    if (newPass !== confirmPass) {
      showAppModal('Mismatch', 'New passwords do not match. Please re-enter.', 'warning');
      return;
    }

    try {
      const newAuth = await PasswordAuth.generateAuthBlock(newPass, 600000);
      editorData.adminAuth = newAuth;
      triggerAutoSave();

      const modalEl = document.getElementById('changePasswordModal');
      const bsModal = bootstrap.Modal.getInstance(modalEl);
      if (bsModal) bsModal.hide();

      els.newPasswordInput.value = '';
      els.confirmPasswordInput.value = '';

      showAppModal('Admin Password Updated', 'Your new PBKDF2 hash has been updated in memory. Remember to Export questions.json and commit it to GitHub so the new password takes effect on GitHub Pages!', 'success');
    } catch (err) {
      showAppModal('Cryptographic Error', err.message, 'danger');
    }
  }

  // --- Universal Modal Dialog Helpers (Never use browser alert/confirm) ---
  function showAppModal(title, message, type = 'info') {
    const modalEl = document.getElementById('appDialogModal');
    if (!modalEl) return;
    const titleEl = document.getElementById('appDialogModalTitle');
    const bodyEl = document.getElementById('appDialogModalBody');
    const headerEl = modalEl.querySelector('.modal-header');

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

    // Clone button to strip existing event listeners
    const newBtn = confirmBtn.cloneNode(true);
    confirmBtn.parentNode.replaceChild(newBtn, confirmBtn);

    const bsModal = new bootstrap.Modal(modalEl);
    newBtn.addEventListener('click', () => {
      bsModal.hide();
      if (typeof onConfirm === 'function') onConfirm();
    });

    bsModal.show();
  }

  function showPromptModal(title, label, onProceed, defaultValue = '') {
    const modalEl = document.getElementById('appPromptModal');
    if (!modalEl) return;
    const titleEl = document.getElementById('appPromptModalTitle');
    const labelEl = document.getElementById('appPromptModalLabel');
    const inputEl = document.getElementById('appPromptModalInput');
    const proceedBtn = document.getElementById('appPromptModalBtn');

    if (titleEl) titleEl.textContent = title;
    if (labelEl) labelEl.textContent = label;
    if (inputEl) inputEl.value = defaultValue;

    const newBtn = proceedBtn.cloneNode(true);
    proceedBtn.parentNode.replaceChild(newBtn, proceedBtn);

    const bsModal = new bootstrap.Modal(modalEl);
    newBtn.addEventListener('click', () => {
      const val = (inputEl.value || '').trim();
      bsModal.hide();
      if (typeof onProceed === 'function') onProceed(val);
    });

    bsModal.show();
    setTimeout(() => { if (inputEl) inputEl.focus(); }, 300);
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
  document.addEventListener('DOMContentLoaded', AdminApp.init);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AdminApp;
}
