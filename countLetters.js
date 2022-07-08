const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(str) {
  const tally = {};
  const splitArray = str.split(" ");
  const joinArray = splitArray.join('');
  
  for (const char of joinArray) {
   if (tally[char]) {
     tally[char] += 1;
   } else {
     tally[char] = 1;
   }
  }
  return tally;
};

console.log(countLetters("fatima"));
