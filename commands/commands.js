function listen(){
	rl.question("",function(answer) {
		if(answer == "stop"){
			log("Running Command: " + answer);
			warn("Server has stopped listening");
			warn("Server has stopped");
			warn("Server Gracefully Exited");
			log("Press any key to continue");
			rl.close();
			process.exit(code=0);
		}
		if(answer == "help"){
			log("Running Command: " + answer);
			help("You can run the following commands: stop");
		}
		if(answer !== "help" || answer !== "stop"){
			log("Command: "+ answer + " is not a valid command");
		}
		listen();
	});
}