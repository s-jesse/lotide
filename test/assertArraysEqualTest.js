const assertArraysEqual = require('../assertArraysEqual');

// test calling the assertArraysEqual function and puttin in the assertion parameters

assertArraysEqual([1, 2, 3], [1, 2, 3]); // should pass
assertArraysEqual([1, 1, 3], [1, 2, 3]); //  should fail