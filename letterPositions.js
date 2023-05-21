// letterPositions function should take a sentence and return an index of where each character occurs in the sentence.

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {

    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;
