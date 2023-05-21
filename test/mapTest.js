const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

// test variable
const words = ["ground", "control", "to", "major", "tom"];

// test function using test variable
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);


// testing function with the assertArraysEqual function
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // should pass
assertArraysEqual(results2, ['g', 'c', 't', 'm', 't']); //  should fail
