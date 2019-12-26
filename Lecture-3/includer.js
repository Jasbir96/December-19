// Q4 Write includer function that accepts isOdd  function and filter even values from actual array without mutating actual array
// arr[5,8,14,17,23,6,8];
// narr[5,17,23];
var arr = [5, 8, 14, 17, 23, 6, 8];

function isOdd(x) {
  return x % 2 == 1;
}
function includer(cb, arr) {
  var narr = [];
  for (var i = 0; i < arr.length; i++) {
    if (isOdd(arr[i]) == true) {
      narr.push(arr[i]);
    }
  }
  return narr;
}
var narr = includer(isOdd, arr);
console.log(narr);
console.log(arr);
