var log = require('./log');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function stop(){
	log.warn("Server has stopped listening");
	log.warn("Server has stopped");
	log.warn("Server Gracefully Exited");
	log.log("Press any key to continue");
	rl.close();
	process.exit(code=0);
}

function help(){
	log.help("You can run the following commands: stop, help");
}

function listen(){
	rl.question("",function(answer) {
		log.log("Running Command: " + answer);
		try{
			window[answer]();
		}catch{
			log.log("Command: "+ answer +" is not a command");
		}
		rl.close();
		listen();
	});
}