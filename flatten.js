const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }

  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else if (array1 !== array2) {
    console.log(`❗️❗️❗️ Assertion Failed: ${array1} !== ${array2}`);
  }
};

const flatten = function(arr) {
// created flatten function to take a array paremter
  const newArr = [];
  // created a new array var to access / store value later
  for (let i = 0; i < arr.length; i++) {
    // loop to go through array parameter
    const loopedElement = arr[i];
    // created variable to store array paremeter with the array loop running through it
    if (!Array.isArray(loopedElement)) {
      // if statement to reverse (false) to see if element is array in loopedElement variable with arr[i]
      newArr.push(loopedElement);
      // taking the elements that are false and pushing into newArr created before for loop
    } else {
      // need else statement deal with arrays that [i] loop will encounter
      for (let j = 0; j < loopedElement.length; j++) {
      // create second loop (child loop to [i] loop) using loopedElement.length to run inside nested arrays
        newArr.push(loopedElement[j]);
      // since this assingment is not going any further with complexity, we assume its numbers inside and dont need any further statements
      // push nestled array elements into same newArr
      }
    }
  }
  return newArr;
};
//tips
// first loop more like parent arr
// second loop more like child running alongside

// test
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
// assertion test using input with flatten function and comparing to output needed
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);