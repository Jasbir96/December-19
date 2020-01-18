// axios
function downloadFile(url) {
  // We are downloading the file here
  //http://google.com/logo.png
  console.log("Downloading file from: " + url);
  var path = "C:\\Downloads\\";
  var img = url.split("/").pop();
  var dImg = path + "\\" + img;
  var variable = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(dImg);
    }, 3000);
  });
  // console.log("k,fasdhfjbnjmvbdvjb");
  return variable
}

const promise = downloadFile("http://google.com/logo.png");
promise.then(function (dFile) {
  console.log("File Downloaded to " + dFile);
});
promise.catch(function(err) {
  console.log(err);
});
