
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1, 2, 3]), 2); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 6]), 3); // => [3, 4]