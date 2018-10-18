const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express();
const port = 7070;

const server = http.createServer(function(req, res){
	const {method, url, headers} = req;
	console.log(url);

	
		if (url === '/' || url=== '/index.html') {
			fs.readFile('../Client/index.html', (err, data) => {
				if (err) {
				console.error(err);
				res.writeHead(404, {'Content-Type':'text/html'});
				res.write("404, file not found");
			} else {
				res.writeHead(200, {'Content-Type':'text/html'});
				res.write(data);
				
			} res.end();
			});

		} 
		else {
		fs.readFile('../Client' + url.toString() + '.html', (err, data) => {
			if (err) {
				console.error(err);
				res.writeHead(404, {'Content-Type':'text/html'});
				res.write("404, file not found");
			} 
			else {
				res.writeHead(200, {'Content-Type':'text/html'});
				res.write(data);
				
			} res.end();
		});
		}

	


}).listen(port);
console.log("Server started...");



// mysql -u root -p -h 127.0.0.1