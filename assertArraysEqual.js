const eqArrays = require('./eqArrays');

// assertArraysEqual function should check to see if 2 array type values are equal by displaying the assertion passed or failed.

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else if (array1 !== array2) {
    console.log(`❗️❗️❗️ Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;
