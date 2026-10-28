/**
 * Board Component for Trivia Jeopardy
 * Dynamically renders the Jeopardy grid, handles tile state, keyboard navigation, and accessibility.
 */

const Board = (function () {
  'use strict';

  let currentFocusedIndex = -1;
  let activeTiles = [];

  /**
   * Renders the complete dynamic board grid
   * @param {HTMLElement|string} container
   * @param {Function} onTileClick
   */
  function render(container, onTileClick) {
    const root = typeof container === 'string' ? document.querySelector(container) : container;
    if (!root) return;

    const round = GameState.getCurrentRound();
    if (!round || !round.categories || round.categories.length === 0) {
      root.innerHTML = '<div class="alert alert-warning m-4">No categories configured for this round.</div>';
      return;
    }

    const categories = round.categories;
    const numCols = categories.length;
    // Find maximum clues in any category to build equal rows
    const maxClues = Math.max(...categories.map(c => (c.clues ? c.clues.length : 0)));

    root.innerHTML = '';
    activeTiles = [];

    const boardWrapper = document.createElement('div');
    boardWrapper.className = 'trivia-board-table';
    boardWrapper.style.setProperty('--board-columns', numCols);

    // 1. Category Headers Row
    const headerRow = document.createElement('div');
    headerRow.className = 'trivia-board-row header-row';
    categories.forEach((cat, colIdx) => {
      const catHeader = document.createElement('div');
      catHeader.className = 'category-header';
      catHeader.setAttribute('role', 'columnheader');
      catHeader.setAttribute('id', `cat-col-${colIdx}`);

      const titleSpan = document.createElement('span');
      titleSpan.className = 'category-title';
      titleSpan.textContent = cat.name;

      catHeader.appendChild(titleSpan);
      headerRow.appendChild(catHeader);
    });
    boardWrapper.appendChild(headerRow);

    // 2. Clue Tiles Rows
    for (let rowIdx = 0; rowIdx < maxClues; rowIdx++) {
      const clueRow = document.createElement('div');
      clueRow.className = 'trivia-board-row clues-row';

      categories.forEach((cat, colIdx) => {
        const clue = cat.clues && cat.clues[rowIdx];
        const tile = document.createElement('button');
        tile.type = 'button';
        tile.className = 'clue-tile';
        tile.dataset.col = colIdx;
        tile.dataset.row = rowIdx;

        if (clue) {
          const isCompleted = GameState.isClueCompleted(clue.id);
          tile.dataset.clueId = clue.id;
          tile.setAttribute('aria-labelledby', `cat-col-${colIdx}`);

          if (isCompleted) {
            tile.classList.add('completed');
            tile.setAttribute('aria-disabled', 'true');
            tile.setAttribute('tabindex', '-1');
            tile.innerHTML = `<span class="tile-value invisible">$${clue.points}</span>`;
          } else {
            tile.setAttribute('tabindex', '0');
            tile.setAttribute('aria-label', `${cat.name}, $${clue.points}`);
            tile.innerHTML = `<span class="tile-value">$${clue.points}</span>`;

            tile.addEventListener('click', () => {
              if (typeof onTileClick === 'function' && !tile.classList.contains('completed')) {
                onTileClick(clue, cat.name, tile);
              }
            });

            // Tile hover/press effects
            tile.addEventListener('mouseenter', () => {
              if (!tile.classList.contains('completed')) {
                tile.classList.add('tile-hover');
              }
            });
            tile.addEventListener('mouseleave', () => {
              tile.classList.remove('tile-hover');
            });

            activeTiles.push(tile);
          }
        } else {
          // Empty slot for uneven category clues
          tile.classList.add('empty-tile');
          tile.setAttribute('disabled', 'true');
          tile.setAttribute('tabindex', '-1');
        }

        clueRow.appendChild(tile);
      });

      boardWrapper.appendChild(clueRow);
    }

    root.appendChild(boardWrapper);
    setupGridKeyboardNavigation(boardWrapper, numCols, maxClues);

    // Entrance animation
    if (typeof GameAnimations !== 'undefined') {
      GameAnimations.animateBoardEntrance(boardWrapper);
    }
  }

  /**
   * Sets up 2D arrow-key grid navigation across available tiles
   */
  function setupGridKeyboardNavigation(wrapper, numCols, numRows) {
    wrapper.addEventListener('keydown', (e) => {
      const activeEl = document.activeElement;
      if (!activeEl || !activeEl.classList.contains('clue-tile')) return;

      const currentCol = parseInt(activeEl.dataset.col, 10);
      const currentRow = parseInt(activeEl.dataset.row, 10);

      let targetCol = currentCol;
      let targetRow = currentRow;

      switch (e.key) {
        case 'ArrowUp':
          targetRow = Math.max(0, currentRow - 1);
          break;
        case 'ArrowDown':
          targetRow = Math.min(numRows - 1, currentRow + 1);
          break;
        case 'ArrowLeft':
          targetCol = Math.max(0, currentCol - 1);
          break;
        case 'ArrowRight':
          targetCol = Math.min(numCols - 1, currentCol + 1);
          break;
        default:
          return;
      }

      e.preventDefault();
      const targetTile = wrapper.querySelector(`.clue-tile[data-col="${targetCol}"][data-row="${targetRow}"]`);
      if (targetTile && !targetTile.hasAttribute('disabled')) {
        targetTile.focus();
      }
    });
  }

  /**
   * Visually marks a tile as completed on the board
   * @param {string} clueId
   */
  function markTileCompleted(clueId) {
    const tile = document.querySelector(`.clue-tile[data-clue-id="${clueId}"]`);
    if (tile) {
      tile.classList.add('completed');
      tile.setAttribute('aria-disabled', 'true');
      tile.setAttribute('tabindex', '-1');
      const val = tile.querySelector('.tile-value');
      if (val) val.classList.add('invisible');
    }
  }

  return {
    render,
    markTileCompleted
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Board;
}
