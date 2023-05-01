const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }

  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else if (array1 !== array2) {
    console.log(`❗️❗️❗️ Assertion Failed: ${array1} !== ${array2}`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];

// const map = function(arr, callBack) {
// //The map function will return a new array based on the results of the callback function.
// };
// look at syntax differences

// const map = function() {
//   const results = [];
//   return results;
// }
// done as a placeholder to see function working

const map = function(array, callback) {
  // temporary code:
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  const results = [];

  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  // adding in loop / consoles to go through each element
  // then showing each item after putting through call back function
  return results;
};
// using a simple template to console.log
// see that function is structured correctly

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);

//call back function is showing value of index 0
//console.log(results1);
// test calling the assertArraysEqual function and puttin in the assertion parameters

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // should pass
assertArraysEqual(results2, ['g', 'c', 't', 'm', 't']); //  should fail
