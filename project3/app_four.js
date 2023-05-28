const {readFile,writeFile} = require("node:fs");

console.log(0);

const data  = readFile("../content/first","utf8",(error,result) => {

if(error){
	console.log(error);
	return;
}
else{
   writeFile("../content/second",result,(err,result)=>{

   if(error){
   	console.log("error");
   }
   else{
   	console.log("sucess");
   }

   });
}

});
console.log(2);
console.log(3);
