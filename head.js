const assertEqual = function(actual, expected) {
  const head = function () {
    actual = head[0];
    if (actual === expected) {
      console.log(`✅  Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
    }
  }
};



assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");