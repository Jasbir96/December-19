function d2b(decimal) {
  var binary = 0;
  var pv = 1;
  while (decimal > 0) {
    var fv = decimal % 2;
    binary = binary + fv * pv;
    pv = pv * 10;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}
console.log(d2b(13));
