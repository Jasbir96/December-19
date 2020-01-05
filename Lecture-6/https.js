const https = require("https");
const fs = require("fs");
// // https:///users
const options = {
  hostname: "jsonplaceholder.typicode.com",
  path: "/users",
  port: "443",
  method: "GET"
};
let wholeData = "";
const request = https.request(options, function(res) {
  // let count = 0;
  res.on("data", function(data) {
    // console.log(""+data);
    // let chunk = JSON.parse(data);
    wholeData = wholeData + data;
    // count++;
  });
  res.on("end", function() {
    // console.log(JSON.parse(wholeData));
    const json = JSON.parse(wholeData);
    createUser(json);
    // fs.writeFileSync("user.json",wholeData);
    // console.log(typeof json);
    // const user=json[0];
    // console.log(user);
    console.log("Data stream has ended");
    // console.log(count);
  });
});
request.end();




https.get()
function createUser() {
  var json=require("./user.json");
  for (var i = 0; i < json.length; i++) {
    let userData = "";
    for (let key in json[i]) {
      userData = userData + key + ":" + json[i][key];
    }
    fs.writeFileSync(json[i]["username"] + ".json", userData);
  }
}
createUser();
