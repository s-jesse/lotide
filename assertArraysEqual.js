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
// PROCESS
//needed to embed previous eqArrays function 
// created assertArrayEqual functin that takes in two arrays
/* then add a conditional that calls on the eqArrays function (checks if 2 arrays are equal)
and utlizes the assertArraysEqual parameters to see if they are true */
// console.log if true or not

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else if (array1 !== array2) {
    console.log(`❗️❗️❗️ Assertion Failed: ${array1} !== ${array2}`);
  }
};

// test calling the assertArraysEqual function and puttin in the assertion parameters

assertArraysEqual([1, 2, 3], [1, 2, 3]); // should pass
assertArraysEqual([1, 1, 3], [1, 2, 3]); //  should fail

/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❗️❗️❗️ Assertion Failed: ${actual} !== ${expected}`);
  }
}; */