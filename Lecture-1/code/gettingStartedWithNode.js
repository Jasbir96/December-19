#!/usr/bin/env node
var fs = require("fs");
// var os=require("os");
// console.log(os.arch());
// console.log(os.cpus());
// input
console.log(process.argv);
const dir = process.argv[2];
// File system
if (dir == undefined) {
  console.log("Kindly Enter Directory Name");
  return;
}

if (fs.existsSync(dir) == true) {
  console.log("Directory already Exist");
  return;
}
fs.mkdirSync(dir);
console.log("Directory " + dir + " has been created");
