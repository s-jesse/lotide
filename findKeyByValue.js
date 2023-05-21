// findKeyByValue function should find the key of an object when the value matches.

const findKeyByValue = function(obj, target) {

  const keyList = Object.keys(obj);

  for (let key of keyList) {

    let value = obj[key];

    if (target === value) {
      return key;
    }

  }
};

module.exports = findKeyByValue;
