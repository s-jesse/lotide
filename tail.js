const assertEqual = require('./assertEqual')

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`❗️❗️❗️ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const tail = function(arrTail) {
  //console.log(arr);
  let arrSliced = arrTail.slice(1);
  //console.log(arrSliced);
  return arrSliced;
};
//tail([1, 2, 3]);

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
/*
Array test
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
*/

/*
Rules
[x] create function tail that returns everything minus "head" of array.
[x] should not modify array thats passed. Used assertEqual to test.
[x] should return new array.
[x] assertEqual cannot compare "===" arrays so need workaround
Tip: compare values of returned array instead of arrays itself.

Input
[x] parameter that will be sliced within function
[x] assertEqual tests to abide by rules

Output
[x] function returns first element sliced from array
[x] array still intact
*/
module.exports = tail;