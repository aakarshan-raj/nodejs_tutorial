const {readFile} = require("node:fs");

console.log("start");

readFile("../content/first","utf8",(error,result)=>{

   if(error){
   	console.log(error);
   }
   else{
   	console.log(result);
    console.log("task ended");
   }

})
console.log("end");