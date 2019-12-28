var ajax = require("./lib/filedownload");
//***************************************
var files = ["file1", "file2", "file3"];

var tracker = {};
function getFile(file) {
  ajax.fakeAjax(file, function(data) {
    // what do we do here?
    console.log("Incoming File " + file + " " + data);
    arrangeInOrder(file, data);
  });
}
function arrangeInOrder(file, data) {
  tracker[file] = data;
  // order check=>
  for (var i = 0; i < files.length; i++) {
    if (tracker[files[i]] == undefined) {
      return;
    } else {
      if (tracker[files[i]] != true) {
        console.log(files[i] + " : " + tracker[files[i]]);
        tracker[files[i]] = true;
      }
    }
  }
}
// request all files at once in "parallel"
//print as soon as you receive them
// print them in seqential order
getFile("file1");
getFile("file2");
getFile("file3");

// //output
// Requesting: file1
// Requesting: file2
// Requesting: file3
// The first  file's data
// The second file's data
// The third file's data
// Complete
