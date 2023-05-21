const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns count of each of the letters in sentence", () => {
    assert.deepEqual(countLetters("in the house"), {i: 1, n: 1, t: 1, h: 2, e: 2, o: 1, u: 1, s: 1});
  });
  it("returns count of each of the letters in sentence", () => {
    assert.deepEqual(countLetters("in the bay"), {i: 1, n: 1, t: 1, h: 1, e: 1, b: 1, a: 1, y: 1}); 
  });
});

// output: return a count of each of the letters in sentence
// need to return values in object where property is each letter
// each property will then display number count of letter iterations as value
// console.log(countLetters("in the house"));
// console.log("hello func", countLetters("in the bay"));
