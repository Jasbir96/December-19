const express = require('express');
const app = express();

//1 
const server = require('http').Server(app);
//2
var io = require('socket.io')(server);


app.use(express.static('public'));

io.on("connection", function(socket) {
    console.log(socket.id);
    socket.on("mymousedown",function(point){
        socket.broadcast.emit("mymousedown",point)
    })
    socket.on("mymousemove",function(point){
        socket.broadcast.emit("mymousemove",point)
    })
    socket.on("mymouseup",function(){
        socket.broadcast.emit("mymouseup");
    })
    // (joined)client->server
    
  });
// GET,POST,DELETE,PATCH
//3
server.listen(3000,function(){
    console.log("server is listening at port 3000");
});
