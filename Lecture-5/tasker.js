var print = console.log;
var chalk = require("chalk");
var figlet = require("figlet");
var readline = require("readline");
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ">"
});
console.clear();

print(chalk.blue(figlet.textSync("Tasker")));
print(chalk.cyan("Type a command(Type help to see list of all commands)"));
reader.prompt();

var tasks = [];
reader.on("line", function(data) {
  var cmd = data.split(" ")[0];
  var sArr = data.split(" ");
  sArr.shift();
  if (cmd == "help") {
    print(`Available Commands: 
          1. add task_name
          2.ls (to list all commands)
          3.delete id(enter task id to delete it)
    
    `);
  } else if (cmd == "ls") {
    for (var i = 0; i < tasks.length; i++) {
      print(`${i + 1}. ${tasks[i]}`);
      // print(i + 1 + "." + tasks[i]);
    }
  } else if (cmd == "add" && sArr.length > 0) {
    tasks.push(sArr.join(" "));
  } else if (cmd == "delete" && sArr.length > 0) {
    var id = Number.parseInt(sArr[0]);
    tasks.splice(id - 1, 1);
  } else {
    print(chalk.red("wrong command"));
  }
  reader.prompt();
});

reader.on("close", function() {
  console.log("Thank You for using our cli");
});
