// function statement
function sayHi() {
  console.log("I said Hi");
}
sayHi();

// function expression
var greeter = function() {
  console.log("HI i am a function expression");
};
greeter();

// IIFEE=> Immediately Invoked Function expression
(function(){
  console.log("Board Has been loaded as soon as page is loaded");
})();
