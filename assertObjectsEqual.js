const eqObjects = require('./eqObjects');

// const eqObjects = function(object1, object2) {
//   let obj1Keys = Object.keys(object1);
//   let obj2Keys = Object.keys(object2);
//   if (obj1Keys.length !== obj2Keys.length) {
//     return false;
//   }
//   for (const key of obj1Keys) {
//     //console.log("key", key);
//     let object1Value = object1[key];
//     //console.log("values of obj1[key]: ", object1Value);
//     let object2Value = object2[key];
//     //console.log("object2Value", object2Value);
//     if (Array.isArray(object1Value) && Array.isArray(object2Value)) {
//       //eqObjects(object1Value, object2Value);
//       return true;
//     } else if (object1Value !== object2Value) {
//       return false;
//     }
//   }
//   return true;
// };

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else if (obj1 !== obj2) {
    console.log(`❗️❗️❗️ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

// const car1 = {
//   color: "red", model:"truck", condition: "old"
// };

// const car2 = {
//   color: "red", model:"van", condition: "old"
// };
// const car3 = {
//   color: "red", model:"van", condition: "old"
// };
// assertObjectsEqual(car1, car2); // should fail: false
// assertObjectsEqual(car2, car3); // should pass: true

module.exports = assertObjectsEqual;
