const eqObjects = require('./eqObjects');

// assertObjectsEqual function should compare two objects and display an assertion if it passes or fails.

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else if (obj1 !== obj2) {
    console.log(`❗️❗️❗️ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

module.exports = assertObjectsEqual;
