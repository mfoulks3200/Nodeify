var log = require("./log");
var server = require("./server");
var readline = require('readline');
var sys = require('sys');
var fs = require('fs')
var child_process = require('child_process');
rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getIP(){
  var interfaces = require('os').networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];

    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
        return alias.address;
    }
  }

  return '0.0.0.0';
}

function getlocalip(){
	var port = server.ports;
	log.log("Local IP: " + getIP() + ":" + port);
}

function stop(){
	log.warn("Server has stopped listening");
	log.warn("Server has stopped");
	log.log("Server Gracefully Exited");
	log.log("Press any key to continue");
	rl.close();
	process.exit(code=0);
}

function config(variable, value){
	fs.readFile("config.js", 'utf8', function (err,data) {
	  if (err) {
		return log.warn(err);
	  }
	  var result = data.replace(/string to be replaced/g, 'replacement');

	  fs.writeFile("config.js", result, 'utf8', function (err) {
		 if (err) return log.warn(err);
	  });
	});
}

function help(){
	log.help("You can run the following commands: stop, help, getip");
}

function listen(){
	rl.question("",function(answer) {
		log.log("Running Command: " + answer);
		if(answer == "stop"){
			stop();
		}else if(answer == "help"){
			help();
		}else if(answer == "getip"){
			getlocalip();
		}else{
			log.warn("Command: " + answer + " is not a command");
		}
		rl.close;
		listen();
	});
}

exports.listen = listen;