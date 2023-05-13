const countOnly = require('../countOnly');
const assertEqual = require('../assertEqual.js');

// variable to store an array - with test keys? 
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
// test variable to store function with above array var for paramter 1 for and properties in argument 2 
const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

// initial test code using assertEqual function adding...?
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
