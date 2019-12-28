//google
// Downloading file from: http://google.com/logo.png
// File saved to: C:\Downloads\logo.png
function downloadFile(url, downloaded) {
  // We are downloading the file here
  var path = "C:\\Downloads\\";
  console.log("Downloading file from: " + url);
  var img = url.split("/").pop();
  var dImg = url + "//" + img;
  setTimeout(function() {
    downloaded(dImg);
  }, 3000);
  // let's assume it takes 3 seconds to download
  // accepts url of image and callback which is called when downloading is done
}
//zip.lib
// We are compressing: C:\Downloads\logo.png
// File compressed to: C:\Downloads\logo-resized.png
function compressFile(filePath, compressed) {
  console.log("We are compressing: " + filePath);
  var ext = filePath.split(".").pop();
  var path = filePath.split(".").shift();
  var cImg = path + "-resized." + ext;
  setTimeout(function() {
    compressed(cImg);
  }, 2000);

  // let's assume it takes 2 seconds to compress
  //accepts  image filepath and callback which is called when compressesion is done
}
function uploadFile(diskPath, uploaded) {
  var uploadUrl = "http://pep/uploads";
  console.log("Uploading to: " + uploadUrl);
  var img = diskPath.split("\\").pop();
  var uImg = uploadUrl + "/" + img;
  setTimeout(function() {
    uploaded(uImg);
  }, 3000);

  // We will upload this file, it takes 3 seconds,
  // let's assume it takes 3 seconds to upload
  //accepts  image filepath and callback which is called when uploading is done
}

// client

downloadFile("http://google.com/logo.png", function(dImg) {
  console.log("File downloaded to " + dImg);
  compressFile(dImg, function(cImg) {
    console.log("File saved to " + cImg);
    uploadFile(cImg, function(UImgUrl) {
      console.log("File uploaded to " + UImgUrl);
      console.log("Task completed");
    });
  });
});
//dropbox
// Uploading to: http://pep/uploads
// File successfully uploaded to: http://pep/uploads/logo-resized.png
// File compressed to: C:\Downloads\logo-resized.png
