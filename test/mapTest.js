const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);

//call back function is showing value of index 0
//console.log(results1);
// test calling the assertArraysEqual function and puttin in the assertion parameters

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // should pass
assertArraysEqual(results2, ['g', 'c', 't', 'm', 't']); //  should fail
