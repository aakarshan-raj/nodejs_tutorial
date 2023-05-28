const http = require("node:http");
const _ = require("lodash");

const server = http.createServer((req,res)=>{


     if(req.url == "/home"){
     	res.write("Home");
     	res.end();
     }
     else if(req.url == "/about"){
     	res.write("About");
     	res.end();
     }
     else if(req.url == "/lodash"){
     	let d = [1,2,3,[4,[5,[6]]]];
     	res.write(String(_.flattenDepth(d)));
     	res.end();	
     }
else{
     res.write("Welcome");
     res.end();
}


});

server.listen(8000);