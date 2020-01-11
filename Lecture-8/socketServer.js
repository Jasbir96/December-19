const socket = require("socket.io");
const http = require("http");
// http server
const server = http.createServer(function(req, res) {});
// socket => socket enabled
const socketServer = socket(server);
socketServer.on("connect", function(socket) {
console.log(socket.id);
  socket.on("myevent", function(data) {
    console.log(data);
  });
});

server.listen(3000, function() {
  console.log("Server is listening at port 3000");
});
