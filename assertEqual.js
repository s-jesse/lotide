const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    // added in template literals instead of concatenated string
  } else if (actual !== expected) {
    console.log(`❗️❗️❗️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

/* \
input
[x] take two values

output
[x] print out if they or not

Process / Rules
- values should match and print (console.log) Assertion Passed:
[actual] === [expected] with values inside
- if not then print (console.log) Assertion Failed:
[actual] !== [expected]
*/

// examples Lighthouse Labs !== Bootcamp (strings dont match)

/*
Test
[x] Compares indentical string
[x] Compares non-indentical string
[x] Compares indentical numbers
[x] Compares non-indentical numbers
*/
