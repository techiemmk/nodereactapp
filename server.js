var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('<html><head><meta charset="utf-8" /></head><body>Hello Maghin !!!</body></html>');
	console.log('Hello from Maghin !!!');
}).listen(2020);