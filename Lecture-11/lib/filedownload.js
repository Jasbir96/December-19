exports.fakeAjax = function(fileNAME, cb) {
  var fake_responses = {
    file1: "The first  file's data",
    file2: "The second file's data",
    file3: "The third file's data "
  };
  var randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;
  console.log("Requesting: " + fileNAME);
  setTimeout(function() {
    cb(fake_responses[fileNAME]);
  }, randomDelay);
};

exports.trackCheckout = function(purchaseInfo) {
  return new Promise(function(resolve,reject){
resolve();
resolve();
resolve();
resolve();
resolve();
console.log("I am inside a promise");
  })
 
};
