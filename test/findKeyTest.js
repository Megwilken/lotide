const assert = require('chai').assert;
const findKey = require('../findKey.js');

const names = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  'noma':      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe("#findKey", () => {
  it("returns 'noma' for x => x.stars === 2", () => {
    assert.strictEqual(findKey(names, x => x.stars === 2), 'noma')
  });

  it("returns 'Akaleri' for x => x.stars === 3", () => {
    assert.strictEqual(findKey(names, x => x.stars === 3), 'Akaleri')
  });
});