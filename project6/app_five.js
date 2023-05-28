const http = require("node:http");

const server = http.createServer((req,res)=>{

console.log("request received");
res.write("hello");
res.end();

});


server.listen(8000,()=>{console.log("server created");});