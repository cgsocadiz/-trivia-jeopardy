/**
 * Data Builder: 10 Categories x 100 Questions (20 per difficulty tier: 1 to 5)
 * Builds 1,000 high quality, diverse trivia questions.
 */

const fs = require('fs');

function buildCategory(catId, catName, difficultyData) {
  const clues = [];
  const pointTiers = [100, 200, 300, 400, 500];

  for (let d = 1; d <= 5; d++) {
    const list = difficultyData[`d${d}`];
    if (!list || list.length !== 20) {
      throw new Error(`Category "${catName}" Tier ${d} has ${list ? list.length : 0} items instead of 20!`);
    }

    const points = pointTiers[d - 1];
    list.forEach((item, idx) => {
      clues.push({
        id: `${catId}-d${d}-${idx + 1}`,
        points: points,
        difficulty: d,
        clue: item[0],
        answer: item[1],
        explanation: item[2] || '',
        image: '',
        dailyDouble: false
      });
    });
  }

  return {
    id: `cat-${catId}`,
    name: catName,
    clues: clues
  };
}

module.exports = { buildCategory };
