const http = require("http");
const https = require("https");
// const userData = require("./user.json");
const server = http.createServer(function(req, res) {
  console.log(req.url);
  const userName = req.url.split("/").pop();
  let wholeData = "";
  const request = https.get(
    "https://jsonplaceholder.typicode.com/users",
    function(resq) {
      resq.on("data", function(chunk) {
        wholeData += chunk;
      });
      resq.on("end", function() {
        const userData = JSON.parse(wholeData);
        for (var i = 0; i < userData.length; i++) {
          if (userData[i].username == userName) {
            res.write(JSON.stringify(userData[i]));
            res.end();
            return;
          }
        }
        res.end("User does not exist");
      });
    }
  );
  request.end();


  // res.end(JSON.stringify(userData));
});
server.listen(3000, function() {
  console.log("Server is listening at port 3000");
});
