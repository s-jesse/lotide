const takeUntil = function(array, callback) {
  const results = [];
  //console.log("item: ", item);
  for (let item of array) {
    //console.log("item loop through array: ", item);
    if (!callback(item)) {
      // if item in callback func is false stop
      // until if statement is false push(item) into empty results array
      results.push(item);
    //console.log("resuls: ", results)
    } else {
      //   console.log("else results: ", results);
      return results;
    }
    // needed else statement to run after callback(item) is false return pushed array
  }
  return results;
};

// //different inputs
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// expected outputs
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

module.exports = takeUntil