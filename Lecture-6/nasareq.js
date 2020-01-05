const https = require("https");
let wholeData = "";
const fs = require("fs");

const request = https.get(
  "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",

  function(res) {
    res.on("data", function(data) {
      wholeData = wholeData + data;
    });
    res.on("end", function() {
      const json = JSON.parse(wholeData);
      const url = json.url;
      let img = "";
      const anotherRequest = https.get(url, function(res) {
        res.on("data", function(imgData) {
          img = img + imgData;
        });

        res.on("end", function() {
          fs.writeFileSync("img.png", img);
        });
      });
      anotherRequest.end();
    });
  }
);
request.end();
