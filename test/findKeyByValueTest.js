const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

// test object
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
// test function
console.log(findKeyByValue(bestTVShowsByGenre,"The Expanse")); // should show sci_fi
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // should pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // should pass
