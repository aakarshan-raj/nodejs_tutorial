const {readFile,writeFile} = require("fs").promises;


const getText = async () => {

   const first = await readFile("../content/first","utf8");
   const second = await readFile("../content/second","utf8");
   await writeFile("../content/third",`${first} ${second}`);
   console.log(first);
   console.log(second);

}

getText();