const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

// test variables
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

// test function with variables
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false