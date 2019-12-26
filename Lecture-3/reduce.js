var arr = [1, 2, 3, 4, 5];
// compose
function multiply(n1, n2) {
  return n1 * n2;
}
var product = arr.reduce(multiply);
console.log(product);
console.log(arr);
