#!/usr/bin/env node
// coding: utf-8
//
// Node.js で Helo World
//
//
//

var http = require('http');
http.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Hello World\n');
	}).listen(80, '0.0.0.0');

console.log('Server running at http://0.0.0.0:80/');



