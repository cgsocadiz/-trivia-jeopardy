/**
 * GSAP Animation Controller for Trivia Jeopardy
 * Provides smooth, professional game-show transitions with graceful fallbacks and reduced-motion support.
 */

const GameAnimations = (function () {
  'use strict';

  function isReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function hasGsap() {
    return typeof window.gsap !== 'undefined';
  }

  /**
   * Home screen hero entrance
   */
  function animateHomeEntrance() {
    if (!hasGsap() || isReducedMotion()) return;
    const tl = window.gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.hero-badge', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo('.hero-title', { opacity: 0, scale: 0.9, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 0.8 }, '-=0.3')
      .fromTo('.hero-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo('.hero-actions .btn', { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }, '-=0.3')
      .fromTo('.preview-board', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3');
  }

  /**
   * Board entrance: categories slide in, clue tiles stagger cascade
   * @param {HTMLElement|string} boardGrid
   */
  function animateBoardEntrance(boardGrid) {
    if (!hasGsap() || isReducedMotion()) return;
    const grid = typeof boardGrid === 'string' ? document.querySelector(boardGrid) : boardGrid;
    if (!grid) return;

    const categoryHeaders = grid.querySelectorAll('.category-header');
    const clueTiles = grid.querySelectorAll('.clue-tile');

    const tl = window.gsap.timeline({ defaults: { ease: 'back.out(1.2)' } });
    tl.fromTo(categoryHeaders, { opacity: 0, y: -25 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.05 })
      .fromTo(clueTiles, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.4, stagger: { amount: 0.6, grid: 'auto', from: 'start' } }, '-=0.2');
  }

  /**
   * Tile click transition before clue opens
   * @param {HTMLElement} tile
   * @param {Function} onComplete
   */
  function animateTileClick(tile, onComplete) {
    if (!hasGsap() || isReducedMotion()) {
      if (typeof onComplete === 'function') onComplete();
      return;
    }

    window.gsap.timeline({ onComplete })
      .to(tile, { scale: 0.92, duration: 0.1, ease: 'power2.in' })
      .to(tile, { scale: 1.1, filter: 'brightness(1.5)', duration: 0.2, ease: 'power2.out' })
      .to(tile, { scale: 1, filter: 'brightness(1)', duration: 0.15 });
  }

  /**
   * Clue modal content entrance
   * @param {HTMLElement} modalContent
   */
  function animateClueOpen(modalContent) {
    if (!hasGsap() || isReducedMotion()) return;
    window.gsap.fromTo(
      modalContent,
      { opacity: 0, scale: 0.88, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power3.out' }
    );
  }

  /**
   * Reveal answer animation
   * @param {HTMLElement} answerContainer
   */
  function animateAnswerReveal(answerContainer) {
    if (!hasGsap() || isReducedMotion()) {
      if (answerContainer) answerContainer.style.display = 'block';
      return;
    }
    window.gsap.fromTo(
      answerContainer,
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'back.out(1.5)', clearProps: 'transform' }
    );
  }

  /**
   * Daily Double special banner reveal
   * @param {HTMLElement} ddElement
   * @param {Function} onComplete
   */
  function animateDailyDouble(ddElement, onComplete) {
    if (!hasGsap() || isReducedMotion()) {
      if (typeof onComplete === 'function') onComplete();
      return;
    }

    const tl = window.gsap.timeline({ onComplete });
    tl.fromTo(ddElement, { scale: 0.2, opacity: 0, rotation: -8 }, { scale: 1.1, opacity: 1, rotation: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' })
      .to(ddElement, { scale: 1, duration: 0.3 })
      .to(ddElement, {
        boxShadow: '0 0 50px rgba(255, 215, 0, 0.8)',
        repeat: 2,
        yoyo: true,
        duration: 0.25
      });
  }

  /**
   * Smooth number counter animation for scoreboard
   * @param {HTMLElement} scoreElement
   * @param {number} startVal
   * @param {number} endVal
   */
  function animateScoreChange(scoreElement, startVal, endVal) {
    if (!scoreElement) return;
    if (!hasGsap() || isReducedMotion()) {
      scoreElement.textContent = (endVal >= 0 ? '$' : '-$') + Math.abs(endVal).toLocaleString();
      return;
    }

    const obj = { val: startVal };
    const isPositive = endVal >= 0;
    const flashClass = endVal > startVal ? 'score-flash-gain' : 'score-flash-loss';

    scoreElement.classList.add(flashClass);
    window.gsap.to(obj, {
      val: endVal,
      duration: 0.8,
      ease: 'power2.out',
      onUpdate: () => {
        const currentInt = Math.round(obj.val);
        const sign = currentInt < 0 ? '-$' : '$';
        scoreElement.textContent = sign + Math.abs(currentInt).toLocaleString();
      },
      onComplete: () => {
        scoreElement.classList.remove(flashClass);
      }
    });
  }

  /**
   * Round transition splash animation
   * @param {HTMLElement} splashElement
   * @param {Function} onComplete
   */
  function animateRoundTransition(splashElement, onComplete) {
    if (!hasGsap() || isReducedMotion()) {
      if (typeof onComplete === 'function') onComplete();
      return;
    }

    const tl = window.gsap.timeline({ onComplete });
    tl.fromTo(splashElement, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' })
      .to(splashElement, { scale: 1.05, duration: 1.2, ease: 'none' })
      .to(splashElement, { opacity: 0, scale: 1.15, duration: 0.4, ease: 'power2.in' });
  }

  /**
   * Final game results podium entrance
   * @param {HTMLElement} container
   */
  function animateResultsEntrance(container) {
    if (!hasGsap() || isReducedMotion() || !container) return;
    const cards = container.querySelectorAll('.ranking-card');
    window.gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.4)' }
    );
  }

  /**
   * Confetti particle celebration on game finish
   * @param {HTMLElement} targetArea
   */
  function triggerCelebration(targetArea) {
    if (isReducedMotion()) return;

    // Create celebratory particles dynamically using HTML5 Canvas
    const canvas = document.createElement('canvas');
    canvas.className = 'celebration-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#f59e0b', '#3b82f6', '#10b981', '#ef4444', '#ec4899', '#8b5cf6'];
    const particles = [];
    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.7) * 18,
        size: Math.random() * 8 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 10,
        alpha: 1
      });
    }

    let animationFrame;
    const startTime = Date.now();

    function frame() {
      const elapsed = Date.now() - startTime;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.rotation += p.vr;
        p.alpha = Math.max(0, 1 - elapsed / 3000);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      if (elapsed < 3000) {
        animationFrame = requestAnimationFrame(frame);
      } else {
        cancelAnimationFrame(animationFrame);
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      }
    }

    animationFrame = requestAnimationFrame(frame);
  }

  return {
    isReducedMotion,
    animateHomeEntrance,
    animateBoardEntrance,
    animateTileClick,
    animateClueOpen,
    animateAnswerReveal,
    animateDailyDouble,
    animateScoreChange,
    animateRoundTransition,
    animateResultsEntrance,
    triggerCelebration
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GameAnimations;
}
