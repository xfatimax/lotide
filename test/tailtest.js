const assertEqual = require('../assertEqual');

const tail = require('../tail');

assertEqual(tail.length, 2);
assertEqual(tail[0], "Lighthouse");
assertEqual(tail[1], "Labs");
assertEqual(tail([6,7]), 5);
//const result = tail["Hello", "Lighthouse", "Labs"];