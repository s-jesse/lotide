
const assert = require('chai').assert;
const middle   = require('../middle');

// test should show 2 passing
describe("#middle", () => {

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

});
