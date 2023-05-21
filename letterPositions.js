const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    //console.log("results: ", results);
    //console.log("current letter: ", sentence[i]);
    //console.log("i", i);
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
    //console.log("value of current letter: ", results[sentence[i]]);

  }
  return results;
};

// console.log(letterPositions("lighthouse in the house"));

// // Testing
// assertArraysEqual(letterPositions("hello").h, [0]);
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2]);
// assertArraysEqual(letterPositions("hello").o, [4]);

module.exports = letterPositions
