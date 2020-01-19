var ajax = require("./lib/filedownload");
//***************************************
var files = ["file1", "file2", "file3"];

// var tracker = {};
function getFile(file) {
  return new Promise(function(resolve, reject) {
    ajax.fakeAjax(file, function(data) {
      // what do we do here?
      resolve(data);
      console.log("Incoming File " + file + " " + data);
      // arrangeInOrder(file, data);
    });
  });
}

// request all files at once in "parallel"
//print as soon as you receive them
// print them in seqential order
// call=> promise
// consume 
var p1 = getFile("file1");
var p2 = getFile("file2");
var p3 = getFile("file3");

// wait 
p1.then(function(data) {
  console.log("File 1  " + data);
  // console.log("Line number 29");
  return p2
}).then(function(data) {
  console.log("File 2" + data);
  return p3
}).then(function(data){
  console.log("FIle 3 "+data);
})
// //output
// Requesting: file1
// Requesting: file2
// Requesting: file3
// The first  file's data
// The second file's data
// The third file's data
// Complete
