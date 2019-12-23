var fs = require("fs");
const dir = process.argv[2];
if (dir == undefined) {
  console.log("Kindly Enter Directory Name");
  return;
}
for (var i = 1; i <= 50; i++) {
  if (fs.existsSync(dir) == true) {
    console.log("Directory already Exist");
    return;
  }
  fs.mkdirSync(dir + "-" + i);
  console.log("Directory " + dir + "-" + i + " has been created");
}
