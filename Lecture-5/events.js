// class
var EventEmitter = require("events");
// instance
var eventMaker = new EventEmitter();
// => consume
// server
eventMaker.on("submit", function fn1(email, password) {
  console.log(email + " " + password);
});
eventMaker.on("submit",function fn2(email){
  if(email=="abc@gmail.com"){
    console.log("Welcome Admin")
  }else{
    console.log("Welcom User")
  }
})

eventMaker.on("click", function fn3() {
  console.log("i was called");
  eventMaker.emit("submit", "abc@gmail.com", "2345678");
});
// create => emit
// form submit
// c1
eventMaker.on("submit",function fn4(){
  console.log("I am third submit event")
  console.log("````````````````````````");
})
// c2
// // c3
// eventMaker.emit("submit", "abcef@gmail.com", "2345678");
eventMaker.emit("click");
eventMaker.emit("submit", "abcd@gmail.com", "2345678");
