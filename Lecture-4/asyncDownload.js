function downloadFile(url, downloaded) {
  // We are downloading the file here
  //http://google.com/logo.png
  console.log("Downloading file from: " + url);
  var path = "C:\\Downloads\\";
  var img = url.split("/").pop();
  var dImg = path + "\\" + img;
  setTimeout(function() {
    downloaded(dImg);
  }, 3000);
  // let's assume it takes 3 seconds to download
  // accepts url of image and callback which is called when downloading is done
}
// output:
// Downloading file from: http://google.com/logo.png
// File saved to: C:\Downloads\logo.png
// client

function downloaded(dImg) {
  console.log("File Saved to " + dImg);
}

downloadFile("http://google.com/logo.png", downloaded);
