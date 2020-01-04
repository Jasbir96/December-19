// Library
console.log(module.exports);
console.log(exports);

exports.greeter = function() {
  console.log("Greeting to all");
};
module.exports.sayHi = function() {
  console.log("Hi All");
};
// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }
