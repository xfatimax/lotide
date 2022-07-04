const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  str.split('').forEach(letter => {
    out[letter] = [];
  });

  for (let i = 0; i < str.length; i++) {
    out[str[i]].push(i);
  }
  return results;
};

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

assertArraysEqual(letterPositions("hello").e, [1]);
