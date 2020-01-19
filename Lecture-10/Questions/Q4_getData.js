//Que Give the output of following code ??
function getData(num) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(num);
    }, 1000);
  });
}
async function helper() {
  const num1 = await getData(10);
  const x = num1 + 1;
  console.log(x);
  const num2 = await getData(30);

  const y = num2 + 1;
  console.log(y);
  const answer = await getData(x + y);
  console.log(answer);
}

helper();
// getData(10)
//   .then(function(num1) {
//     x = 1 + num1;
//     console.log(x);
//     return getData(30);
//   })
//   .then(function(num2) {
//     y = 1 + num2;
//     console.log(y);
//     return getData(x + y);
//   })
//   .then(function(num3) {
//     console.log(num3);
//   });
