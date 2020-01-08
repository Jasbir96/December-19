const http = require("http");
const html=require("fs").createReadStream("index.html")
const server = http.createServer(function(req, res) {
  // console.log(req.url);
  // routing
  if (req.url == "/home") {
    // res.write("<h1>HomePage</h1>");
    html.pipe(res);
  } else if (req.url == "/about") {
    res.write("<h1>About Page</h1>");
    res.end();
  } else if (req.url == "/help") {
    res.write("<h1>Help Page</h1>");
    res.end();
  } else {
    res.write("<h1>404 Page Not Found</h1>");
    res.end();
  }
});

server.listen(4000, function() {
  console.log("Server is listening at port 4000");
});
