//google
// Downloading file from: http://google.com/logo.png
// File saved to: C:\Downloads\logo.png
function downloadFile(url) {
  // We are downloading the file here
  var path = "C:\\Downloads\\";
  console.log("Downloading file from: " + url);
  var img = url.split("/").pop();
  var dImg = url + "//" + img;
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(dImg);
    }, 3000);
  });

  // let's assume it takes 3 seconds to download
  // accepts url of image and callback which is called when downloading is done
}
function compressFile(filePath) {
  console.log("We are compressing: " + filePath);
  var ext = filePath.split(".").pop();
  var path = filePath.split(".").shift();
  var cImg = path + "-resized." + ext;
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(cImg);
    }, 2000);
  });
}
function uploadFile(diskPath) {
  var uploadUrl = "http://pep/uploads";
  console.log("Uploading to: " + uploadUrl);
  var img = diskPath.split("\\").pop();
  var uImg = uploadUrl + "/" + img;
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(uImg);
    }, 3000);
  });
}
// 3
const promise = downloadFile("http://google.com/logo.png")
  .then(function(dImg) {
    console.log("File downloaded to " + dImg);
    return compressFile(dImg);
  })
  .then(function(cImg) {
    console.log("File saved to " + cImg);
    return uploadFile(cImg);
  })
  .then(function(UImgUrl) {
    console.log("File uploaded to " + UImgUrl);
    console.log("Task completed");
  })
  .catch(function(err) {
    console.log(err);
  });
