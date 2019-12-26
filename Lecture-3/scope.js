// var myvar = 1;
// variable = 10;
function a() {
  console.log(myvar);
  console.log(variable);
}
function b() {
  var myvar = 2;
  variable = 20;
  console.log(myvar);
  a();
}
console.log(myvar);
myvar = 3;
b();
