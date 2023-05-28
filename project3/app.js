const os = require('node:os');

console.log(os.uptime());

currentOs = {                 //object
	home:os.homedir(),
	plat:os.platform(),
	up:os.uptime(),
	free:os.freemem()   
}

console.log(currentOs);