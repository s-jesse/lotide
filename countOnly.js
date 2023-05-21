// allItems: an array of strings that we need to look through
// itemstoCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  // functions can only return one thing. Be a primitive data type, like string or an object.
  // function countOnly needs to return a proper report on all the strings found in the input array
  // as well as their respective counts. Therefore needs to return an object that can represent the stats.
  const results = {}
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

// variable to store an array - with test keys? 
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// // test variable to store function with above array var for paramter 1 for and properties in argument 2 
// const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
// result1 is undefined and we cannot access a propery on undefined as thought it were an object
// fix error by having our function define a new empy object results and return it.


// // initial test code using assertEqual function adding...?
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;
