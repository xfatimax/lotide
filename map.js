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
const eqArrays = function (arr1, arr2) {
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
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
    results.push(callback(item));
  }
  return results;
}


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

