const {readFileSync,writeFileSync} = require('node:fs');



setInterval(
	()=>{
	
	const first = readFileSync("../content/first");
    const second = readFileSync("../content/second");
    writeFileSync("../content/third",`${first} ${second}`,{flag:'a'})

}, 
	1);