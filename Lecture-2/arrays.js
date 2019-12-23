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
arr[95] = "some value";

// console.log(arr);
// for (var key in arr) {
//   console.log(key + " : " + arr[key]);
// }
arr["9"] = "some value";

arr["some value"] = "something";
for (var key in arr) {
  console.log(key + " : " + arr[key]);
}

// arr.length
// console.log(arr[44]);
// console.log(arr.length);

// addFirst
// arr.unshift("First Value");
// console.log(arr);
// arr.shift();
// console.log("``````````````````````````````");
// // console.log(arr);
// // addLast
// // arr.push();
// // removeLast
// // arr.pop();
// // arr.push("Last Value");
// // console.log(arr);
// // console.log(arr[96]);

// // arr.slice();

// // var slicedArr=arr.slice(4);
// var slicedArr = arr.slice(4,7);
// // console.log(slicedArr);
// // console.log("```````````````````````````");
// // console.log(arr);

// // arr.splice();
// var splicedArr = arr.splice(6, 2);
// // console.log(splicedArr);
// // console.log(arr);
// var ans = arr.includes("Stevenson");
// var idx = arr.indexOf("Stevenson");
// console.log(idx);
