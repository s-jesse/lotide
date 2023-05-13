// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//     // added in template literals instead of concatenated string
//   } else if (actual !== expected) {
//     console.log(`❗️❗️❗️ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const countLetters = function(sentence) {
  let storageObj = {};
  //console.log("emptyObj", storageObj);
  // input: function takes in sentence as string

  for (const key of sentence) {
    //console.log("key loop thru sentence arg: ", key);
    if (key !== " ") {
      if (storageObj[key]) {
        storageObj[key] = storageObj[key] + 1;
        //console.log("storageObj[key] plus one: ", storageObj[key]);
      } else {
        storageObj[key] = 1;
        //console.log("storageObj[key] equals 1: ", storageObj[key]);
      }
    }
    //console.log("storageObj[key] value: ", storageObj[key]);
  }
  //console.log("returned storageObj: ", storageObj);
  return storageObj;

};
  
// output: return a count of each of the letters in sentence
// need to return values in object where property is each letter
// each property will then display number count of letter iterations as value
//console.log("hello func", countLetters("hello"));
//console.log(countLetters("lighthouse in the house"));
module.exports = countLetters;
