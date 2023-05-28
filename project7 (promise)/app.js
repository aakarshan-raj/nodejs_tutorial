const http = require("node:http");


const server = http.createServer((req,res)=>{

  if(req.url == "/home"){
  	res.write("Home");
  	res.end();
  }
  else if(req.url == "/find"){

   for(var i = 0;i<10000;i++ ){
   	console.log(i);
   }

   res.write(`Answer is:${i}`);
   res.end();

  }
  else{
    res.write("Default");
    res.end();
  }



});

server.listen(8000,()=>{console.log("Created server, running on 8000!")});