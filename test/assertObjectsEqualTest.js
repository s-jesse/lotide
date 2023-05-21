const assertObjectsEqual = require('../assertObjectsEqual');

const car1 = {
  color: "red", model:"truck", condition: "old"
};

const car2 = {
  color: "red", model:"van", condition: "old"
};
const car3 = {
  color: "red", model:"van", condition: "old"
};

// Test Code
assertObjectsEqual(car1, car2); // should fail
assertObjectsEqual(car2, car3); // should pass
