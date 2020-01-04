var readline = require("readline");
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.clear();
reader.prompt();
reader.on("line", function(data) {
  console.log("Did You said " + data);
  reader.prompt();
});

reader.on("close", function() {
  console.log("Thank You for using our cli");
});
