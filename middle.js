const middle = function(arr) {
// need to pass arugment thats an array that we need to go through
  if (arr.length < 3) {
    return [];
  }
  // const middleArr = []; not needed because needs updating and not doing anything. Dealing with index / first number
  if (arr.length % 2 === 0) {
    const firstIndex = arr.length / 2 - 1; // firstIndex = 1; placeholder
    const secondIndex = arr.length / 2; // secondIndex = 2; placeholder
    const firstNumber = arr[firstIndex];
    const secondNumber = arr[secondIndex];
    return [firstNumber, secondNumber];
    //return [firstNumber];
  } // why we dont need if/else futher - redundant after first two returns. (return statement is key)
  const middleIndex = Math.floor(arr.length / 2); // middleIndex = 0; placeholder
  const middleNumber = arr[middleIndex];
  return [middleNumber];
};
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// // initial test console.log(middle([1, 2, 3, 4, 5, 6]));

// // test with assertArraysequal function
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
/*
when writing notes take in pseudocode
look at how we added code to arr parameter without needing seperate var
look at how we utilized comparative / math operations to the array parameter
add in logical notes to understand the entire process
*/
module.exports = middle
