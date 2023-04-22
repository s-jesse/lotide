const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❗️❗️❗️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for ( let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }

  }
  return true;
};

/*
  //let checker = arr1 === arr2;
  //console.log(checker);
/*  
let newArr1 = arr1.toString();
let newArr2 = arr2.toString();
let checker = newArr1 === newArr2;
console.log(checker);
*/
 /* if (arr1 === arr2) {
    console.log(true);
  } else if (arr1 !== arr2) {
    console.log(false);
  }
  */

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

/*
Rule
[] create eqArrays function that takes in two arrays and checks to see if they're equal
[] should be able to access any kind of array
[] test wtih assertEqual function after

Input
[] two different arrays into function 

Output
[] true or false value after comparison

Process
- within function, should use comparative operator to return boolean value
- 
*/