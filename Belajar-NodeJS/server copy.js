let http = require("http");

let server = http.createServer(function (req, res) {
  res.end("Hello Gaes");
});

server.listen("8000");
console.log("server running on http://localhost:8000");
