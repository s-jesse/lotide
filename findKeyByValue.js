const findKeyByValue = function(obj, target) {
  // scan obj with value given to return key
  // if no key is found, should return undefined
  // use object.key() function to show all keys
  // loop through all keys

  const keyList = Object.keys(obj);
  //console.log("object.key", keyList);
  for (let key of keyList) {
    // val of keys
    //console.log("key loop", key);

    let value = obj[key];
    // not keyvalue
    //console.log("keyValues loop", value);

    if (target === value) {
      return key;
    }

  }
};

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// console.log(findKeyByValue(bestTVShowsByGenre,"The Expanse")); // should show sci_fi
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue
