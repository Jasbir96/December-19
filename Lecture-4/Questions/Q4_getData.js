//Que Give the output of following code ??
function getData(num, cb) {
  setTimeout(function() {
    cb(num);
  }, 1000);
}
var x;
function getX(num1) {
  x = 1 + num1;
  console.log(x);
  getData(30, getY);
}
function getY(num2) {
  var y = 1 + num2;
  console.log(y);
  getData(x + y, getXY);
}
function getXY(num3) {
  console.log(answer);
}
getData(10, getX);

