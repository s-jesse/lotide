const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');

// Function Test showing return
console.log(letterPositions("lighthouse in the house"));

// Assertion Test
assertArraysEqual(letterPositions("hello").h, [0]); // should pass
assertArraysEqual(letterPositions("hello").e, [1]); // should pass
assertArraysEqual(letterPositions("hello").l, [2]); // should fail
assertArraysEqual(letterPositions("hello").o, [4]); // should pass