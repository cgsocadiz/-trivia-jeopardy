console.log('--- STARTING ADMIN LOGIC & VALIDATION TESTS ---\n');

const fs = require('fs');

// Verify JSON validation logic handles:
// 1. Valid data
// 2. Missing categories
// 3. Duplicate clue IDs
// 4. Missing clue answer
// 5. Corrupted adminAuth

const validJson = JSON.parse(fs.readFileSync('assets/data/questions.json', 'utf8'));

function validateData(data) {
  const errors = [];
  const warnings = [];

  if (!data.adminAuth || !data.adminAuth.salt || !data.adminAuth.passwordHash) {
    errors.push('Admin authentication block (salt/passwordHash) is incomplete.');
  }

  if (!data.game || !data.game.title || !data.game.title.trim()) {
    errors.push('Game title is required.');
  }

  const rounds = (data.game && data.game.rounds) || [];
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
              errors.push(`Duplicate Clue ID detected: "${clue.id}" in category "${cat.name}".`);
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

  return { isValid: errors.length === 0, errors, warnings, clueCount: allClueIds.size };
}

// Test 1: Valid JSON
const validRes = validateData(validJson);
if (!validRes.isValid || validRes.clueCount < 30) {
  throw new Error(`Valid data unexpectedly produced errors: ${JSON.stringify(validRes.errors)}`);
}
console.log(`✓ Valid data audit succeeded with ${validRes.clueCount} clues and 0 errors.`);

// Test 2: Detect Duplicate Clue ID
const dupeJson = JSON.parse(JSON.stringify(validJson));
dupeJson.game.rounds[0].categories[0].clues[1].id = dupeJson.game.rounds[0].categories[0].clues[0].id;
const dupeRes = validateData(dupeJson);
if (dupeRes.isValid || !dupeRes.errors.some(e => e.includes('Duplicate Clue ID'))) {
  throw new Error('Failed to catch duplicate Clue ID.');
}
console.log('✓ Duplicate Clue ID successfully flagged.');

// Test 3: Detect Missing Clue Answer
const missingAnswerJson = JSON.parse(JSON.stringify(validJson));
missingAnswerJson.game.rounds[0].categories[0].clues[0].answer = '';
const missingAnswerRes = validateData(missingAnswerJson);
if (missingAnswerRes.isValid || !missingAnswerRes.errors.some(e => e.includes('empty correct response'))) {
  throw new Error('Failed to catch missing answer.');
}
console.log('✓ Missing answer successfully flagged.');

// Test 4: Detect Missing adminAuth
const missingAuthJson = JSON.parse(JSON.stringify(validJson));
delete missingAuthJson.adminAuth;
const missingAuthRes = validateData(missingAuthJson);
if (missingAuthRes.isValid || !missingAuthRes.errors.some(e => e.includes('Admin authentication block'))) {
  throw new Error('Failed to catch missing adminAuth.');
}
console.log('✓ Missing adminAuth successfully flagged.');

console.log('\n--- ALL ADMIN VALIDATION TESTS PASSED! ---');
