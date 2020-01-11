// require =>socket -client
const client = require("socket.io-client");
// first httop request
const socket = client.connect("http://localhost:3000");

setTimeout(function() {
  socket.emit("myevent", "client has just joined");
}, 2000);
