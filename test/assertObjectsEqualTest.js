const assertObjectsEqual = require('../assertObjectsEqual');
//const eqObjects = require('../eqObjects');

const car1 = {
  color: "red", model:"truck", condition: "old"
};

const car2 = {
  color: "red", model:"van", condition: "old"
};
const car3 = {
  color: "red", model:"van", condition: "old"
};
assertObjectsEqual(car1, car2); // should fail: false
assertObjectsEqual(car2, car3); // should pass: true
