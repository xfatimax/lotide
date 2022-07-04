const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(str) {
  let x = {};
  
  str.split('').forEach(e => {
    x[e] = 0;
  });

  str.split('').forEach(letter => {
    x[letter] ++;
  });

  return x;
};

console.log(countLetters("fatima"));
