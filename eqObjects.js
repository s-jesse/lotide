// eqObjects takes two objects and checks to see if they are equal by returning true or false accordingly.

const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (const key of obj1Keys) {

    let object1Value = object1[key];

    let object2Value = object2[key];

    if (object1Value !== object2Value) {
      return false;
    }
  }
  return true;

};

module.exports = eqObjects;
