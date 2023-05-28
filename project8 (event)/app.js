const eventEmitter = require("events");

const customEvent = new eventEmitter();

customEvent.on("death_of_all",()=>{
	console.log("everyone is dead");
})

customEvent.emit("death_of_all");