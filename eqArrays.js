const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }

};

//const assertEqual = require('./assertEqual');

function eqArrays(arr1, arr2) {
  if(arr1.length != arr2.length) {
      return false;
  } 
  else { 
      let result = false;
      for(let i=0; i < arr1.length; i++) {

          if(arr1[i] != arr2[i]) {
              return false;
          }
          else {
              result = true;
          }
      }
      return result; 
  }
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
