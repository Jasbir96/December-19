const today = require("./commands/today");
const forecast = require("./commands/forecast");
const version = require("./commands/version");
const minmist = require("minimist");
const help = require("./commands/help");
const input = minmist(process.argv.slice(2));
const location = input.location || input.l;
const cmd = input["_"][0];
if (cmd == "today") {
  today(location);
} else if (cmd == "forecast") {
  forecast(location);
} else if (cmd == "help") {
  help();
} else if (cmd == "version") {
  version();
} else {
  console.log("Wrong Command");
}
