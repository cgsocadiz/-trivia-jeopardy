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
        currentCategoryIdx = 0;
        renderCategories();
        renderClues();
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
  }

  /**
   * Loads questions.json through relative path with fallback to sample-data.js
   */
  async function loadQuestionsData() {
    try {
      const response = await fetch('assets/data/questions.json');
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
        editorData = JSON.parse(JSON.stringify(rawSourceData));

        // Hide login, show dashboard
        els.loginSection.classList.add('d-none');
        els.dashboardSection.classList.remove('d-none');
        els.passwordInput.value = '';

        initializeDashboard();
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
    if (!els.roundSelector || !editorData || !editorData.game) return;
    const rounds = editorData.game.rounds || [];
    els.roundSelector.innerHTML = '';
    rounds.forEach((round, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = `${idx + 1}. ${round.title} (${round.categories ? round.categories.length : 0} categories)`;
      if (idx === currentRoundIdx) opt.selected = true;
      els.roundSelector.appendChild(opt);
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
        els.categoriesList.innerHTML = '<div class="text-muted p-3">No categories in this round yet. Click "+ Add Category".</div>';
      }
      return;
    }

    currentRound.categories.forEach((cat, idx) => {
      // Dropdown option
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
        item.className = 'list-group-item d-flex justify-content-between align-items-center bg-dark text-light border-secondary mb-1 rounded';
        item.innerHTML = `
          <div>
            <span class="badge bg-primary me-2">${idx + 1}</span>
            <strong class="category-name-display">${escapeHtml(cat.name)}</strong>
            <small class="text-muted ms-2">(${cat.clues ? cat.clues.length : 0} clues)</small>
          </div>
          <div class="btn-group btn-group-sm">
            <button class="btn btn-outline-info btn-move-cat-up" data-idx="${idx}" title="Move Up" ${idx === 0 ? 'disabled' : ''}>
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="btn btn-outline-info btn-move-cat-down" data-idx="${idx}" title="Move Down" ${idx === currentRound.categories.length - 1 ? 'disabled' : ''}>
              <i class="bi bi-arrow-down"></i>
            </button>
            <button class="btn btn-outline-warning btn-rename-cat" data-idx="${idx}" title="Rename">
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn btn-outline-danger btn-delete-cat" data-idx="${idx}" title="Delete">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        `;

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
    if (!els.cluesTableBody || !editorData || !editorData.game) return;
    const rounds = editorData.game.rounds || [];
    const currentRound = rounds[currentRoundIdx];
    if (!currentRound || !currentRound.categories || currentRound.categories.length === 0) {
      els.cluesTableBody.innerHTML = '<tr><td colspan="6" class="text-center text-muted py-4">No categories available. Add a category first.</td></tr>';
      return;
    }

    const currentCat = currentRound.categories[currentCategoryIdx];
    if (!currentCat || !currentCat.clues || currentCat.clues.length === 0) {
      els.cluesTableBody.innerHTML = '<tr><td colspan="6" class="text-center text-muted py-4">No clues in this category. Click "+ Add Clue" to create one.</td></tr>';
      return;
    }

    els.cluesTableBody.innerHTML = '';
    currentCat.clues.forEach((clue, idx) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="fw-bold text-warning">$${clue.points}</td>
        <td>
          <div class="text-truncate" style="max-width: 320px;" title="${escapeHtml(clue.clue)}">${escapeHtml(clue.clue)}</div>
        </td>
        <td>
          <div class="text-truncate text-success" style="max-width: 220px;" title="${escapeHtml(clue.answer)}">${escapeHtml(clue.answer)}</div>
        </td>
        <td class="text-center">
          ${clue.dailyDouble ? '<span class="badge bg-warning text-dark"><i class="bi bi-star-fill"></i> DD</span>' : '<span class="text-muted">—</span>'}
        </td>
        <td>
          <small class="text-muted">${clue.id}</small>
        </td>
        <td class="text-end">
          <div class="btn-group btn-group-sm">
            <button class="btn btn-outline-info btn-move-clue-up" title="Move Up" ${idx === 0 ? 'disabled' : ''}>
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="btn btn-outline-info btn-move-clue-down" title="Move Down" ${idx === currentCat.clues.length - 1 ? 'disabled' : ''}>
              <i class="bi bi-arrow-down"></i>
            </button>
            <button class="btn btn-outline-primary btn-edit-clue" title="Edit">
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn btn-outline-light btn-duplicate-clue" title="Duplicate">
              <i class="bi bi-files"></i>
            </button>
            <button class="btn btn-outline-danger btn-delete-clue" title="Delete">
              <i class="bi bi-trash"></i>
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
    setDraftBadge('Draft saved at ' + new Date().toLocaleTimeString());
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
    const maxClues = Math.max(...categories.map(c => (c.clues ? c.clues.length : 0)));

    let html = `<div class="trivia-board-table" style="--board-columns: ${categories.length}">`;
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
          html += `<div class="clue-tile preview-tile" title="${escapeHtml(clue.clue)}"><span class="tile-value">$${clue.points}</span>${clue.dailyDouble ? ' <small class="text-warning">★</small>' : ''}</div>`;
        } else {
          html += '<div class="clue-tile empty-tile"></div>';
        }
      });
      html += '</div>';
    }
    html += '</div>';

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
