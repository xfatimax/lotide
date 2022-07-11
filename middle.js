const eqArrays = require('./eqArrays');
// function eqArrays(arr1, arr2) {
//   if(arr1.length != arr2.length) {
//       return false;
//   } 
//   else { 
//       let result = false;
//       for(let i=0; i < arr1.length; i++) {

//           if(arr1[i] != arr2[i]) {
//               return false;
//           }
//           else {
//               result = true;
//           }
//       }
//       return result; 
//   }
// }

const assertArraysEqual= function (actual, expected) {
  if (actual.length != expected.length) {
    return false;
  } 
  else { 
      let result = false;
      for (let i = 0; i < actual.length; i++) {
        if(actual[i] !== expected[i]) {
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
}

const middle = function(array) {
  let length = array.length;
  //let newArr = [];
  //let middleChar = ""; 

  if (length < 3) {
    return [];
  } else if (length % 2 === 0) { 
    let middleChar = (length / 2);
    console.log (array.slice(middleChar -1 , middleChar + 1));

  } else {
  let middleChar = Math.round(length / 2);
  let newArr = [];
  newArr.push(array[middleChar - 1]);
  console.log (newArr);
  }
};


module.exports = middle;