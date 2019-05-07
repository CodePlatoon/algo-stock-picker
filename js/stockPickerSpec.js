// run `npm install shallow-equal --save` in this folder before you get started with this challenge
// Rewrite this in Unit Test

var sp = require("./stockPicker");
var shallowEqualArrays = require('shallow-equal/arrays');

console.log(shallowEqualArrays(sp.picker([17,3,6,9,15,8,6,1,10]) , [1, 4]))
console.log(shallowEqualArrays(sp.picker([17,3,6,9,15,8,6,1,10]), [1,4]))
console.log(shallowEqualArrays(sp.picker([3,17,6,9,18,15,6,1,10]), [0,4]))
console.log(shallowEqualArrays(sp.picker([1,17,6,9,8,15,6,3,19]), [0,8]))
console.log(shallowEqualArrays(sp.picker([19,17,6,9,8,15,6,3,1]), [2,5]))
