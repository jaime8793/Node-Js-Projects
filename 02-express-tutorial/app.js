const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url)
    const url = req.url
    if (url === "/") {
       // console.log('user hit the server');
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>home page</h1>');
        res.end();
    }
      else if (url === "/about") {
        //console.log("user hit the server");
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>About page</h1>");
        res.end();
    }
      else  {
        //console.log("user hit the server");
        res.writeHead(404, { "content-type": "text/html" });
        res.write("<h1>Cant Be found</h1>");
        res.end();
      }
});

server.listen(5000)