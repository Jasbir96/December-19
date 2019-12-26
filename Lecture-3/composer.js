var arr = [1, 2, 3, 4, 5];
// compose
function multiply(n1, n2) {
  return n1 * n2;
}

function composer(cb, arr) {
  var total = arr[0];
  for (var i = 1; i < arr.length; i++) {
    total = cb(total, arr[i]);
  }
  return total;
}
var product = composer(multiply, arr);
console.log(product);
console.log(arr);

