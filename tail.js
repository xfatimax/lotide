const { assert } = require("console");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }

};

const tail = function (result) {
  return result.slice(1);
};



//assertEqual(tail([6,7]), 5);

const result = tail["Hello", "Lighthouse", "Labs"];
// assertEqual(tail.length, 2);
// assertEqual(tail[0], "Lighthouse");
// assertEqual(tail[1], "Labs");

