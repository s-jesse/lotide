const assertEqual = require('../assertEqual.js');
const eqArrays = require('../eqArrays.js');

// test with assertion function

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true); 
assertEqual(eqArrays([1, "2", 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 5, 3], [1, 5, 3]), true); 


// test eqArrays function
console.log((eqArrays([1, 2, 3], [1, 2, 3]))); // => true
console.log((eqArrays([1, 2, 3], [3, 2, 1]))); // => false
console.log((eqArrays(["1", "2", "3"], ["1", "2", "3"]))); // => true
console.log((eqArrays(["1", "2", "3"], ["1", "2", 3]))); // => false