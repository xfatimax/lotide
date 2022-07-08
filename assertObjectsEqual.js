const eqArrays = function (arr1, arr2) {
  if(arr1.length !== arr2.length) {
      return false;
  } 
  else { 
      let result = false;
      for(let i = 0; i < arr1.length; i++) {

          if(arr1[i] != arr2[i]) {
              return false;
          }
          else {
              result = true;
          }
      }
      return result; 
  }
};
const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let k in object1) {
      if (Array.isArray(object1[k]) && Array.isArray(object2[k])) {
        let arrayCheck = eqArrays(object1[k], object2[k]);
        if (arrayCheck === true) {
          return true;
        }

        if ((object1[k] === object2[k])) {
          return true;
        }
      } else {
      //if (object1[k] !== object2[k]); {
          return false;
        }
      }
    }
    return true;
  }

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  const result = eqObjects(object1, object2);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Asseration Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};


//console.log(`Example label: ${inspect(actual)}`);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2),false); // => false

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false); // => false
