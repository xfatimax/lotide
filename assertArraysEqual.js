

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

assertArraysEqual([1, 2, 3], [1, 2, 3]); 