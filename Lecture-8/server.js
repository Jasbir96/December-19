const http = require("http");

const server = http.createServer(function(req, res) {
  // console.log(req.url);
  // routing
  if (req.url == "/home") {
    // res.write("<h1>HomePage</h1>");
    const html = require("fs").createReadStream("index.html");
    html.pipe(res);
  } else if (req.url == "/about") {
    res.write("<h1>About Page</h1>");
    res.end();
  } else if (req.url == "/help") {
    res.write("<h1>Help Page</h1>");
    res.end();
  } else if (req.url == "/back.jpeg") {
    const img = require("fs").createReadStream("back.jpeg");
    img.pipe(res);
  } else if (req.url == "/style.css") {
    const css = require("fs").createReadStream("style.css");
    css.pipe(res);
  } else {
    res.write("<h1>404 Page Not Found</h1>");
    res.end();
  }
});

server.listen(4000, function() {
  console.log("Server is listening at port 4000");
});
