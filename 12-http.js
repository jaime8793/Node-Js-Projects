const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the home page");
  } else if (req.url === "/about") {
    res.end("here is our short history");
  }
  res.end("<h1>Oops</h1>");
});

server.listen(5000);
