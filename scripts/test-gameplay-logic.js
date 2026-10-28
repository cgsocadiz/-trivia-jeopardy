const fs = require('fs');

console.log('--- STARTING TRIVIA GAMEPLAY LOGIC & SCORING TESTS ---\n');

// Mock browser globals
globalThis.window = {
  crypto: globalThis.crypto,
  matchMedia: () => ({ matches: false })
};
globalThis.localStorage = (function () {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, val) => { store[key] = String(val); },
    removeItem: (key) => { delete store[key]; },
    clear: () => { store = {}; }
  };
})();

const GameState = require('../assets/js/game-state.js');
globalThis.GameState = GameState;
const Scoring = require('../assets/js/scoring.js');
const Persistence = require('../assets/js/persistence.js');

// 1. Initialize GameState with questions.json
const questions = JSON.parse(fs.readFileSync('assets/data/questions.json', 'utf8'));
GameState.setGameData(questions);
console.log('✓ GameState initialized with questions data.');

// 2. Configure Teams
const testTeams = [
  { id: 'team-1', name: 'Team Alpha', score: 0, color: '#3b82f6' },
  { id: 'team-2', name: 'Team Bravo', score: 0, color: '#ef4444' }
];
GameState.setState({ teams: testTeams, activeTeamId: 'team-1', status: 'playing' });
console.log('✓ Teams configured.');

// 3. Test Awarding Points
const tx1 = Scoring.applyScoreChange('team-1', 200, 'Correct Answer', 'gk-200');
if (!tx1 || tx1.newScore !== 200) {
  throw new Error(`Failed to award points to team-1: ${JSON.stringify(tx1)}`);
}
console.log(`✓ Awarded 200 points to Team Alpha. Current score: ${GameState.getState().teams[0].score}`);

// 4. Test Deducting Points (Negative scores supported)
const tx2 = Scoring.applyScoreChange('team-2', -300, 'Incorrect Penalty', 'gk-300');
if (!tx2 || tx2.newScore !== -300) {
  throw new Error(`Failed to deduct points from team-2: ${JSON.stringify(tx2)}`);
}
console.log(`✓ Deducted 300 points from Team Bravo. Current score: ${GameState.getState().teams[1].score}`);

// 5. Test Transaction History
const history = Scoring.getScoreHistory();
if (history.length !== 2) {
  throw new Error(`Expected 2 transactions, got ${history.length}`);
}
console.log('✓ Verified transaction history audit count = 2.');

// 6. Test Undo Last Transaction
const undone = Scoring.undoLastTransaction();
if (!undone || undone.id !== tx2.id) {
  throw new Error('Undone transaction did not match tx2.');
}
if (GameState.getState().teams[1].score !== 0) {
  throw new Error(`Expected Team Bravo score to be restored to 0, got ${GameState.getState().teams[1].score}`);
}
console.log('✓ Score Undo successfully restored Team Bravo score to 0.');

// 7. Test Clue Completion Tracking & Double-scoring prevention
GameState.markClueCompleted('gk-200');
if (!GameState.isClueCompleted('gk-200')) {
  throw new Error('Clue gk-200 should be marked completed.');
}
if (GameState.isClueCompleted('gk-300')) {
  throw new Error('Clue gk-300 should not be completed.');
}
console.log('✓ Clue completion tracking verified.');

// 8. Test Persistence (Save session & load session)
Persistence.saveSession(GameState.getState());
const loadedSession = Persistence.loadSession();
if (!loadedSession || loadedSession.usedClueIds.length !== 1 || loadedSession.usedClueIds[0] !== 'gk-200') {
  throw new Error('Session recovery verification failed.');
}
console.log('✓ Persistence saveSession and loadSession verified.');

// 9. Test Round Completion Logic
const round1 = GameState.getCurrentRound();
console.log(`✓ Current Round: "${round1.title}"`);
const remainingClues = GameState.getRemainingCluesCount();
console.log(`✓ Remaining clues in round: ${remainingClues}`);

console.log('\n--- ALL GAMEPLAY LOGIC & SCORING TESTS PASSED! ---');
