var http = require('http');
var port = process.env.PORT || 13337;

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World, here is something coming soon 4\n');
}).listen(port);
