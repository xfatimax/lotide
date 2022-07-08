
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

const without = function(sourceArray, itemsToRemoveArray) {
    let newArray = sourceArray;
    
    for (let i = 0; i < itemsToRemoveArray.length; i++) {
      for (let j = 0; j < newArray.length; j ++) {
        if (newArray[j] === itemsToRemoveArray[i]) {
        newArray.splice(j,1);
      } 
    }
  }
    return newArray;
  };

const words = ["hello","world", "lighthouse"];
without(words, ["world"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
