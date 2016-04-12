import http from "http";
import express from "express";

http.createServer((req, res) => {
   res.writeHead(200, {"content-Type":"text/plain"});
   res.end("Hello, world!\n");
}).listen(3000, "127.0.0.1");

console.log("server running at http://127.0.0.1:3000");
