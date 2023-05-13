const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for ( let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }

//   }
//   return true;
// };

// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2) === true) {
//     console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
//   } else if (array1 !== array2) {
//     console.log(`❗️❗️❗️ Assertion Failed: ${array1} !== ${array2}`);
//   }
// };
// input within function needs to take source parameter and remove elements based on itemsToRemove parameter

// const without = function(source, itemsToRemove) {
//   let newArray = source.splice(itemsToRemove);
//   console.log("new array", newArray);
// }
const without = function(source, itemsToRemove) {
  let newArray = [];
  // loop through source 
  for (let i = 0; i < source.length; i++) {
  //console.log(i, source[i], "i, source of i");
  // go through all the items
  if (itemsToRemove.length < 2) {
  // reference the index of the array
    if(source[i] !== itemsToRemove[0]) {
      newArray.push(source[i]);
    } 
  } else {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  // for (let j = 0; j < itemsToRemove.length; j++) {
  //   console.log(source[i], itemsToRemove[j], "source i, j")
  // if (itemsToRemove[j] === source[i]) {
  //   newArray.push(source[i]);
  // }
  // }
  }
  // compare source array with itemsToRemove
  }
  // if itemsToRemove is an array, loop through itemsToRemove array
  // if they match we will remove the element
  // return good basket of arrays
  return newArray;
}

/*
Rules
- without function should take 2 parameters(source) Array and (itemsToRemove) Array
- should return a new Array with rest of source Array - itemsToRemove from list.
*/

// // Test with outputs 
// // added console.log to test function
// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// // assertion test
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without