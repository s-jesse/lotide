const findKey = function(object, callback) {
  // const keyList = Object.keys(object);
  // console.log("object.key", keyList);

  // for (let key in object) {

  //console.log("key loop", object[key]);
  //let value = object[key]; same thing as object[key] directly in callback function
  //console.log("keyValues loop", value);

  //     if (callback(object[key])) {
  //       //console.log("key: ", key);
  //       return key;
  //     }
  //   }
  // };
  for (const prop in object) {
    //console.log("object loop: ", prop);
    //objectProp = object[prop];
    //console.log("property loop: ", objectProp);

    if (callback(object[prop])) {
      //console.log("return value");
      return prop;
    } else if (callback(object[prop] !== prop)) {
      return undefined;
    }
  }
};

// for (const keyValues in objectProp){
//   values = objectProp[keyValues];
//   console.log("key loop: ", keyValues);
//   console.log("value loop: ", values);
//}
// const keyList = Object.keys(object);
// console.log("object.key", keyList);
// for (let key of keyList) {
//   console.log("key loop", key);

// //Output Example
// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma"); // => "noma"

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "Blue Hill"); // => "noma"

module.exports = findKey
