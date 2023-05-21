// countOnly function should take in a collection of items and then is given what items we care about, which then will return a specfic subset of those items.

const countOnly = function(allItems, itemsToCount) {
  // functions can only return one thing. Be a primitive data type, like string or an object.
  /*
  function countOnly needs to return a proper report on all the strings found in the input array
  as well as their respective counts. Therefore needs to return an object that can represent the stats.
  */
  const results = {};
  for (const item of allItems) {
    // inside the loop,
    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it.
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
    console.log(item);
  }
  return results;
};

module.exports = countOnly;
