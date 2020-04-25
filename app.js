var http =  require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var readStream = fs.createReadStream('public/index.html');
    readStream.pipe(res);
});

var appName = "Connect Four";
var address = "127.0.0.1";
var port = 3000;
server.listen(port, address);
console.log(`${appName} is running on ${address}:${port}`)