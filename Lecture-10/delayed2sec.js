function delayBy2Sec() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("I will give answer in 2seconds");
    }, 2000);
  });
}
function delayBy3Sec() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("I will give answer in 3seconds");
    }, 3000);
  });
}
console.log("Before async fn");

async function helper() {
  try {
    console.log("Before code");
    const getAAfter2Sec = delayBy2Sec();
    const getAAfter3Sec = delayBy3Sec();
    console.log(await getAAfter3Sec);
    console.log(getAAfter2Sec);
    console.log("After code");
  } catch (err) {
    console.log(err);
  }
}
helper();
console.log("After async function");
