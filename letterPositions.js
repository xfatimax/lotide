
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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  // const splitArray = sentence.split(" ");
  // const joinArray = splitArray.join('')
 
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) { 
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
}
return results;
}


//assertArraysEqual(letterPositions("hi").e, [1]);
console.log(letterPositions("hello"));

