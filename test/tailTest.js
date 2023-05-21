const assert = require('chai').assert;
const tail   = require('../tail');

// Test should show 2 passing.
describe("#tail", () => {
  it("returns array without head element", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns 2 for array with 3 elements.length", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
});