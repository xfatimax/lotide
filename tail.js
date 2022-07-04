
  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅  Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
    }
  
  };

  const tail = function(array) {
    return array.slice(1);
  };
  


assertEqual(tail([6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");