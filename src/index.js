import http from "http";
import mysql from "mysql";
import express from "express";

var connection = mysql.createConnection({
  host     : '172.28.128.3',
  user     : 'root',
  password : 'roowpw',
  database : 'eshop'
});

connection.connect();

connection.query('SELECT * from users', function(err, rows, fields) {
  if (!err)
    // console.log('The solution is: ', rows);
	rows.forEach(function(v, k) {
		console.info("v", v.username);
		console.info("k", k);
	});

  else
    console.log('Error while performing Query.');
	console.info(err);
});

connection.end();

http.createServer((req, res) => {
   res.writeHead(200, {"content-Type":"text/plain"});
   res.end("Hello, world!\n");
}).listen(3000, "127.0.0.1");

console.log("server running at http://127.0.0.1:3000");
