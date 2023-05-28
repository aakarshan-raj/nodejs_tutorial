const {readFileSync} = require("node:fs");


console.log("start");

const data = readFileSync("../content/first","utf8");
console.log(`${data}`);
console.log("end");