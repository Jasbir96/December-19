function downloadFile(url, downloaded) {
  console.log("Downloading file from: " + url);
  var path = "C:\\Downloads\\";
  var img = url.split("/").pop();
  var dImg = path + "\\" + img;
  setTimeout(function() {
    downloaded(dImg);
  }, 3000);
  
}
function downloaded(dImg) {
  console.log("File Saved to " + dImg);

}

downloadFile("http://google.com/logo.png", downloaded);
