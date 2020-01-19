function createPromise() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(10);
    }, 2000);
  });
}

const promiseFromThen = createPromise()
  .then()
  .then(function myfn() {
    setTimeout(function() {
      console.log("inside second then");
return "from setTimeout"
    }, 1000);
    return "from main";
  });
console.log(promiseFromThen);

setTimeout(function() {
  console.log(promiseFromThen);
}, 3000);
