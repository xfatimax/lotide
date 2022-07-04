
function assertArraysEqual(arr1, arr2) {
    if(arr1.length != arr2.length) {
        return false;
    } 
    else { 
        let result = false;
        for(let i=0; i <arr1.length; i++) {
  
            if(arr1[i] != arr2[i]) {
                return false;
            }
            else {
                result = true;
            }
        }
        if (result === true) {
          console.log("The arrays are equal"); }
        else {
          console.log("The arrays are not equal"); 
        }
    }
   
  };

function eqArrays(arr1, arr2) {
  if(arr1.length != arr2.length) {
      return false;
  } 
  else { 
      let result = false;
      for(let i=0; i <arr1.length; i++) {

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
    let newArray = [];
  
    for (let i = 0; i < sourceArray.length; i++) {
      if (sourceArray[i] instanceof Object) {
        newArray.push(without(sourceArray[i], itemsToRemoveArray));
      } else if (!itemsToRemoveArray.includes(sourceArray[i])) {
        newArray.push(sourceArray[i]);
      }
    }
    return newArray;
  };

  const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
