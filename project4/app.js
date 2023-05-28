const http = require("node:http");


const server = http.createServer((req,res)=>{

if(req.url == "/home"){
	res.write("you are home");
	res.end();
}

else if(req.url == "/about"){
	res.write("end");
	res.end();
}
else{

res.end("hello");

}

});

server.listen(8000);
