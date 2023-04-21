const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log("❗️❗️❗️ Assertion Failed: " + actual + " !== " + expected);
  }
};

// Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

/* \
input
[] take two values

output
[] print out if they or not

Process / Rules
- values should match and print (console.log) Assertion Passed:
[actual] === [expected] with values inside
- if not then print (console.log) Assertion Failed:
[actual] !== [expected]
*/

// examples Lighthouse Labs !== Bootcamp (strings dont match)

/*
Test
[] Compares indentical string
[] Compares non-indentical string
[] Compares indentical numbers
[] Compares non-indentical numbers
*/