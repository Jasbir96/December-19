// console.log(typeof 1);
// console.log(typeof 1.1);
// console.log(typeof "sdrty");
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof {"name":"steve"});
// console.log(typeof [1,2,3,4,5]);

// var arr = [1, 2, 3, 4, 5,];
// arr.myproperty = "i am a property of array";
// var string = "something";
// arr.myproperty = arr.myproperty + string;
// arr.getSum = function() {
//   // console.log(this);
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(arr.length);
//   return sum;
// };
// // console.log(arr.myproperty);
// // console.log(arr.getSum());
// arr.push(6);
// for (var key in arr) {
//   console.log(key + " : " + arr[key]);
// }

// console.log(arr["5"]);
// console.log(arr[6]);
// console.log(arr["6"]);
function sayHi(){
  console.log("hello all");
}

sayHi.newProperty="function are also objects";
sayHi.mymethod=function(){
  console.log("method of a function");
}
console.log(sayHi.newProperty);
sayHi.mymethod();

// console.log(typeof sayHi);









// // console.log(typeof null);


