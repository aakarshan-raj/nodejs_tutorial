const {readFile} = require("node:fs");



const getText = (path)=>{

return new Promise((resolve,reject)=>{
readFile(path,"utf8",(error,result)=>{

   if(error){
     reject(error); 
   }
   else{
    resolve(result);
   }

})

  })

}

getText("../content/first").then((result)=>console.log(result))
                           .catch((error)=>console.log(error))


