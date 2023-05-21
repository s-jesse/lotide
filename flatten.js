// flatten function should "flatten" nested arrays into single array.

const flatten = function(arr) {

  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const loopedElement = arr[i];
    // created variable to store array paremeter with the array loop running through it
    if (!Array.isArray(loopedElement)) {
      newArr.push(loopedElement);
    } else {
      for (let j = 0; j < loopedElement.length; j++) {
      // create second loop (child loop to [i] loop) using loopedElement.length to run inside nested arrays
        newArr.push(loopedElement[j]);
      // since this assignment is not going any further with complexity, we assume its numbers inside and dont need any further statements
      // push nestled array elements into same newArr
      }
    }
  }
  return newArr;
};

module.exports = flatten;