var print = console.log;
var cap = {
  firstName: "Steve",
  "last Name": "Rogers",
  age: 45,
  friends: ["Tony", "Bruce", "Peter"],
  address: {
    state: "New york",
    city: "Manhatten"
  },
  sayHi: function() {
    console.log("Cap says Hi");
  },
  key:"some value"
};
// get => .operator , [],
// set => 
cap.movies=["Winter Soldier","Avengers","Civil War"];
cap.age=40;
console.log(cap);
// console.log("``````````````````````````");
// delete cap.key;
// console.log(cap);

// var age="firstName";
// console.log(cap[age]);
// console.log(cap.age);

// for (var key in cap) {
//   console.log(key + " : " + cap[key]);
// }
// for (var key in cap) {
//   console.log(key + " : " + cap["key"]);
// }

// // .operator
// print(cap.firstName);
// print(cap.friends);

// // // []=>
// // print(cap["firstName"]);
// // print(cap["last Name"]);


