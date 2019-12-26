var arr = [1, 2, 3, 4, 5, 6];
function doubleIt(x) {
  return 2 * x;
}
function transformer(cb, arr) {
  var narr = [];
  for (var i = 0; i < arr.length; i++) {
    narr.push(cb(arr[i]));
  }
  return narr;
}
var narr = transformer(doubleIt, arr);
console.log(narr);
console.log(arr);
