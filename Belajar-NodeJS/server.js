//untuk mengimpor library http dari node_modeuls
var http = require("http");
//node_modeuls adalah directory yang menyimpan library nodeJS.

var server = http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("Hello <b> World </b>!");
    res.end();
  })
  .listen(8000);

console.log("server running on http://localhost:8000");
