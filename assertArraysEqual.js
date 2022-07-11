
function assertArraysEqual(actual, expected) {
  if(actual.length != expected.length) {
    return false;
  } 
  else { 
      let result = false;
      for(let i=0; i <actual.length; i++) {
        if(actual[i] != expected[i]) {
          return false;
        }
        else {
          result = true;
        }
      }
      if (result === true) {
        console.log(`✅  Assertion passed: ${actual} === ${expected}`); }
      else {
        console.log(`🛑  Assertion failed: ${actual} !== ${expected}`); 
      }
  }
};

module.exports = assertArraysEqual;
