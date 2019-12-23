#!/usr/bin/env node
// console.log(__dirname);
// console.log(process.cwd());
var fs = require("fs");

const dirFolders = fs.readdirSync(process.cwd());
// console.log(dirFolders);

for (var i = 0; i < dirFolders.length; i++) {
  console.log(dirFolders[i]);
}