function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    var arr2 = [1, 2, 3];
    arr.push(
      function() {
        console.log(arr2[i]);
      }
    );
  }

  return arr;
}
var fs = buildFunctions();
// console.log(fs);

