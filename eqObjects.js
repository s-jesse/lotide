//const assertEqual = require('../assertEqual.js');
// eqArrays require?

// ommit these ?? or are there others???
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


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    // added in template literals instead of concatenated string
  } else if (actual !== expected) {
    console.log(`❗️❗️❗️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);
  //console.log("object 1 keys: ", obj1Keys)
  //console.log("object 2 keys: ", obj2Keys)
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (const key of obj1Keys) {
    //console.log("key", key);
    //console.log("value of obj1: ", obj1Keys);
    let object1Value = object1[key];
    //console.log("values of obj1[key]: ", object1Value);
    //return values;
    let object2Value = object2[key];
    //console.log("object2Value", object2Value);
    // if(Array.isArray(object1Value) && Array.isArray(object2Value)) {
    //   eqArrays(object1Value, object2Value);
    // } else
    if (object1Value !== object2Value) {
      return false;
    }
  }
  return true;
  //   for ( const value of obj1Keys) {
  //     let values = obj1Keys[value];
  //     console.log("values: ", values);
  // }
};

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// console.log(eqObjects(shirtObject , anotherShirtObject)); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
//assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

//const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
//eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false
module.exports = eqObjects;
