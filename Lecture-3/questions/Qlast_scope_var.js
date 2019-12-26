let x = 10;
console.log(x);
function myfun() {
  let x = 20;
  x += 1;
  console.log("line5 " + x);
  if (true) {
    let x = 30;
    console.log("line8 " + x);
  }
  console.log(x);
}
myfun();
console.log("line13 " + x);

