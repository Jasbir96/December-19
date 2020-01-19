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
async function helper() {
  // parallely
  var p1 = getFile("file1");
  var p2 = getFile("file2");
  var p3 = getFile("file3");

  const f1Data = await p1;
  console.log(f1Data);
  const f2Data = await p2;
  console.log(f2Data);
  const f3Data = await p3;
  console.log(f3Data);
}
helper();