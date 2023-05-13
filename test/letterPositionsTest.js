const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');

console.log(letterPositions("lighthouse in the house"));

// Testing
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2]);
assertArraysEqual(letterPositions("hello").o, [4]);