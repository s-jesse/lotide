// middle function should return the "middle" elements of an array, unless 2 or less values, then it should return empty array.

const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  }
  if (arr.length % 2 === 0) {
    const firstIndex = arr.length / 2 - 1;
    const secondIndex = arr.length / 2;
    const firstNumber = arr[firstIndex];
    const secondNumber = arr[secondIndex];
    return [firstNumber, secondNumber];
  }
  const middleIndex = Math.floor(arr.length / 2);
  const middleNumber = arr[middleIndex];
  return [middleNumber];
};

module.exports = middle;
