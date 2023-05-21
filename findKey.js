// findKey function should search for a key through the object using a callback function to return said key once it matches with a truthy value.

const findKey = function(object, callback) {

  for (const prop in object) {


    if (callback(object[prop])) {
      return prop;
    } else if (callback(object[prop] !== prop)) {
      return undefined;
    }
  }
};

module.exports = findKey;
