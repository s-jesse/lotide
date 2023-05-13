const flatten = require('../flatten');
const assertArraysEqual = require('../assertArraysEqual');

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
// assertion test using input with flatten function and comparing to output needed
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);