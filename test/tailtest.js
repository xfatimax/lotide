const assertEqual = require('../assertEqual');

const tail = require('../tail');

// assertEqual(tail.length, 2);
// assertEqual(tail[0], "Lighthouse");
// assertEqual(tail[1], "Labs");
// assertEqual(tail([6,7]), 5);
//const result = tail["Hello", "Lighthouse", "Labs"];

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2 ,3] for [1, 2, 3]", () => {
    assert.deepEqual(head([1, 2, 3]), [2, 3]);
  });
});