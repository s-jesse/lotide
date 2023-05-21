const map = function(array, callback) {
  // temporary code:
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  const results = [];

  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  // adding in loop / consoles to go through each element
  // then showing each item after putting through call back function
  return results;
};
// using a simple template to console.log
// see that function is structured correctly

// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word[1]);

// //call back function is showing value of index 0
// //console.log(results1);
// // test calling the assertArraysEqual function and puttin in the assertion parameters

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // should pass
// assertArraysEqual(results2, ['g', 'c', 't', 'm', 't']); //  should fail

module.exports = map
