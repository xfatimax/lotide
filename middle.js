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

const middle = function(array) {
  let length = array.length;

  if (length < 3) {
    return [];
  } else if (length % 2 === 0) { 
    return [array[Math.round(length / 2) - 1], array[Math.round(length / 2)]];

  } else if (length % 2 === 1) { 
    return [array[Math.floor(length / 2)]];
  }
};
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]