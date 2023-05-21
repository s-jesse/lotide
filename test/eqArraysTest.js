const assertEqual = require('../assertEqual.js');
const eqArrays = require('../eqArrays.js');

// test with assertion function

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true);  // should fail
assertEqual(eqArrays([1, "2", 3], [1, 2, 3]), true); // should fail
assertEqual(eqArrays([1, 5, 3], [1, 5, 3]), true); // should pass


// test eqArrays function
console.log((eqArrays([1, 2, 3], [1, 2, 3]))); // => true
console.log((eqArrays([1, 2, 3], [3, 2, 1]))); // => false
console.log((eqArrays(["1", "2", "3"], ["1", "2", "3"]))); // => true
console.log((eqArrays(["1", "2", "3"], ["1", "2", 3]))); // => false