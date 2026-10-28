/**
 * Compiler Script:
 * Combines the 10 categories (100 questions each = 1,000 questions)
 * into assets/data/questions.json and assets/js/sample-data.js.
 */

const fs = require('fs');
const path = require('path');

const cat1 = require('./categories/cat1-history');
const cat2 = require('./categories/cat2-science');
const cat3 = require('./categories/cat3-geography');
const cat4 = require('./categories/cat4-popculture');
const cat5 = require('./categories/cat5-music');
const cat6 = require('./categories/cat6-literature');
const cat7 = require('./categories/cat7-sports');
const cat8 = require('./categories/cat8-food');
const cat9 = require('./categories/cat9-animals');
const cat10 = require('./categories/cat10-technology');

const all10Categories = [
  cat1, cat2, cat3, cat4, cat10, // Round 1: History, Science, Geography, Pop Culture, Technology
  cat5, cat6, cat7, cat8, cat9   // Round 2: Music, Literature, Sports, Food, Animals
];

// Verify each has 100 clues
all10Categories.forEach((cat, idx) => {
  if (!cat.clues || cat.clues.length !== 100) {
    throw new Error(`Category ${idx + 1} (${cat.name}) does not have 100 clues! Found: ${cat.clues ? cat.clues.length : 0}`);
  }
});

console.log(`Verified all 10 categories. Total questions: ${all10Categories.reduce((acc, c) => acc + c.clues.length, 0)}`);

// Existing questions.json for adminAuth preservation
const existingPath = path.join(__dirname, '..', 'assets', 'data', 'questions.json');
let existingData = {};
try {
  existingData = JSON.parse(fs.readFileSync(existingPath, 'utf8'));
} catch (e) {
  console.warn('Could not read existing questions.json, using defaults.');
}

const adminAuth = existingData.adminAuth || {
  algorithm: 'PBKDF2',
  hashAlgorithm: 'SHA-256',
  iterations: 600000,
  salt: 'a47b23bc46432463091b2f81681aedd2',
  passwordHash: 'a919f60db3851410663863c14c3e5e8afaf2d05d82bc090643f409c6b6a89780'
};

const gameTitle = (existingData.game && existingData.game.title) || 'Shaamei Trivia Jeopardy';
const gameSettings = (existingData.game && existingData.game.settings) || {
  incorrectAnswerDeduction: false,
  requireQuestionForm: false,
  dailyDoubleEnabled: true,
  finalJeopardyEnabled: true,
  timerEnabled: true,
  timerSeconds: 30,
  soundEnabled: true
};

// Round 1: 5 categories x 100 questions = 500 questions
const round1Categories = [
  JSON.parse(JSON.stringify(cat1)),
  JSON.parse(JSON.stringify(cat2)),
  JSON.parse(JSON.stringify(cat3)),
  JSON.parse(JSON.stringify(cat4)),
  JSON.parse(JSON.stringify(cat10))
];

// Round 2: 5 categories x 100 questions = 500 questions (multiplier 2 points: 200, 400, 600, 800, 1000)
const round2Categories = [
  JSON.parse(JSON.stringify(cat5)),
  JSON.parse(JSON.stringify(cat6)),
  JSON.parse(JSON.stringify(cat7)),
  JSON.parse(JSON.stringify(cat8)),
  JSON.parse(JSON.stringify(cat9))
];

// Set points according to round multiplier for consistency
round2Categories.forEach(cat => {
  cat.clues.forEach(clue => {
    clue.points = clue.difficulty * 200; // Round 2 is 200, 400, 600, 800, 1000
  });
});

const questionsData = {
  schemaVersion: 1,
  adminAuth: adminAuth,
  game: {
    id: 'trivia-jeopardy-master',
    title: gameTitle,
    settings: gameSettings,
    rounds: [
      {
        id: 'round-1',
        title: 'Jeopardy Round',
        multiplier: 1,
        categories: round1Categories
      },
      {
        id: 'round-2',
        title: 'Double Jeopardy Round',
        multiplier: 2,
        categories: round2Categories
      }
    ],
    finalJeopardy: (existingData.game && existingData.game.finalJeopardy) || {
      enabled: true,
      category: "World Landmarks",
      clue: "Constructed for the 1889 World's Fair, this 330-meter wrought-iron lattice tower was initially criticized by leading French artists but became an iconic global symbol.",
      answer: "The Eiffel Tower",
      explanation: "Designed by Gustave Eiffel's engineering firm, it was built to celebrate the centennial of the French Revolution."
    },
    // Store category library for host customization
    categoryLibrary: all10Categories.map(c => ({
      id: c.id,
      name: c.name,
      totalClues: c.clues.length
    }))
  }
};

// Write questions.json
fs.writeFileSync(existingPath, JSON.stringify(questionsData, null, 2), 'utf8');
console.log(`Saved ${existingPath}`);

// Write sample-data.js
const sampleDataPath = path.join(__dirname, '..', 'assets', 'js', 'sample-data.js');
const sampleDataContent = `/**
 * Default sample trivia dataset with 10 categories and 1,000 curated questions (100 per category, 20 per difficulty tier).
 * Used when questions.json fails to fetch (e.g. file:// protocol or offline).
 */
window.DEFAULT_SAMPLE_QUESTIONS = ${JSON.stringify(questionsData, null, 2)};
`;

fs.writeFileSync(sampleDataPath, sampleDataContent, 'utf8');
console.log(`Saved ${sampleDataPath}`);
