const http = require("node:http");
const fs = require("node:fs");

const indexHtml = fs.readFileSync("./index.html", "utf-8");
const aboutHtml = fs.readFileSync("./about.html", "utf-8");
const contactHtml = fs.readFileSync("./contact.html", "utf-8");
const notFoundHtml = fs.readFileSync("./404.html", "utf-8");

// Create a local server to receive data from
const server = http.createServer(function (req, res) {
  //handle multiple routes in node.js HTTP server
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(indexHtml);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(aboutHtml);
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(contactHtml);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(notFoundHtml);
    res.end();
  }
});

// listen to server on port 8282
const PORT = 8282;
server.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});
