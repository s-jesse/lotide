
const assert = require('chai').assert;

const middle   = require('../middle');

describe("#middle", () => { 

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });

});

// const assertArraysEqual = require('../assertArraysEqual');
// Test Code
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// // initial test console.log(middle([1, 2, 3, 4, 5, 6]));

// // test with assertArraysequal function
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);