// without function should take in an array as a source and items to remove as second argument, then return the array without itemsToRemove.

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {

    if (itemsToRemove.length < 2) {
      if (source[i] !== itemsToRemove[0]) {
        newArray.push(source[i]);
      }
    } else {
      if (!itemsToRemove.includes(source[i])) {
        newArray.push(source[i]);
      }
    }
  }
  return newArray;
};

module.exports = without;