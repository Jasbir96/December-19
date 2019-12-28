console.log("Before");
function greet() {
  console.log("Hello All");
}
console.log(global.setTimeout(greet,5000))
// setTimeout(greet, 5000);
// console.log("After");
// for(var i=0;i<=10;i++){
//   console.log(i);
// }