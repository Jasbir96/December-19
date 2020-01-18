var axios = require("axios");

var promise = axios.get("https://githubbghg.com");
console.log(promise);
promise.then(function(data) {
  // console.log(promise);
  console.log(data);
});
promise.catch(function(err) {
  console.log(err);
});
