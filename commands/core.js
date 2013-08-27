function run(command){
	if(command == "stop"){
			log("Running Command: " + answer);
			warn("Server has stopped listening");
			warn("Server has stopped");
			warn("Server Gracefully Exited");
			log("Press any key to continue");
			rl.close();
			process.exit(code=0);
		}else if(command == "help"){
			log("Running Command: " + answer);
			help("You can run the following commands: stop");
		}else{
			return true;
		}
}