const http = require("http");
// const fs = require("fs");
// // https:///users
const options = {
  hostname: "127.0.0.1",
  path: "/users",
  port: "3000",
  method: "GET"
};
const request = http.request(options, function(res) {
 
  res.on("data", function(data) {
    console.log("data event was called");
    console.log(data+"");
  });
  res.on("end", function() {
    console.log("end event was called");
  });
  
});
request.end();
