var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');

var PORT = process.env.PORT || 2020;

const server = express();

server.use(express.static(path.join(__dirname, 'static')));

server.get('/', (req, res) => {
	fs.readFile('./index.html', function(error, pageContent){
		if(error){
			res.writeHead(404, {'Content-Type': 'text/html'});
			res.end('<html><head><meta charset="utf-8" /></head><body>Oops something gone wrong !!!</body></html>');
		}
		else{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(pageContent);
		}
	});
});

server.listen(PORT);
console.log('Server listening at port '+PORT);