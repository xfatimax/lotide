const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
};

console.log(`Example label: ${inspect(actual)}`);
