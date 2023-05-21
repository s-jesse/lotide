// assertEqual function should compare primitive type values and should display assertion if it passes or fails.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    // added in template literals instead of concatenated string
  } else if (actual !== expected) {
    console.log(`❗️❗️❗️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
