const {readStream,writeFileSync} = require("node:fs");

for(let i=0;i<100000;i++){
writeFileSync("../content/first","Datatatata \n",{flag:'a'});
}