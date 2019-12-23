// Dynamically Typed
// Primitive types=> Number,String,undefined,boolean,null
// var variable;
// console.log(variable);
// var variable = "Hello All";
// console.log(variable);
// variable = 10;
// variable = true;
// variable = null;

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
//   // process.stdout.write("Number is "+ i );
// }

// Non Primtive=> Function ,Arrays,Object
function sayHi(name) {
  console.log("Hi " + name);
  // return "Some Value";
}
// console.log(sayHi("Steve"));

// Arrays=> collection of anything
var arr = [
  1,
  1.1,
  true,
  null,
  "Steve",
  undefined,
  [1, 2, 3, 4, 5],
  function fninsideArray() {
    console.log("I am a function inside an array");
  },
  {
    name: "Steve"
  }
];

// console.log(arr[6][2]);
// arr[7]();

// Objects=>{name:value}
var cap = {
  firstName: "Steve",
  lastName: "Rogers",
  age: 45,
  friends: ["Tony", "Bruce", "Peter"],
  address: {
    state: "New york",
    city: "Manhatten"
  },
  sayHi: function() {
    console.log("Cap says Hi");
  }
};

// console.log(cap);
// // value=> property
// console.log(cap.firstName);

// function => methods
cap.sayHi();