var first = [1, 2, 3, 4, 5];
var second = [];
var length=first.length
for (var i = 0; i < length; i++) {
  console.log(first.length);
  var poppedValue = first.pop();
  second.push(poppedValue);
}

console.log(second);
