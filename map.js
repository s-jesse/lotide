// map function should take an array to map and return new array based on results of callback function.
const map = function(array, callback) {

  const results = [];

  for (let item of array) {

    results.push(callback(item));
  }
  return results;
};

module.exports = map;
