var core = require('core');

function listen(){
	rl.question("",function(answer) {
		if(core.run(answer)){
			log("Command: "+ answer + " is not a valid command");
		}
		listen();
	});
}