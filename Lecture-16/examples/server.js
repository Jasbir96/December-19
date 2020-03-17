const express = require("express");

const app = express();

app.get("/home",function(req,res){
    res.end("<h1>Response recieved at home</h1>")
})

app.get("*",function(req,res){
res.end("<h1>404 Page Not Found</h1>");    
})

app.listen(3000, function (req, res) {
    console.log("Server is listening at port 3000");
})