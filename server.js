var http = require("http");
var url = require("url");
var fs = require("fs");
var readline = require('readline');
var uptime = 0;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getTime(){
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	var mo=today.getMonth()+1;
	var d=today.getDate();
	var y=today.getFullYear();
	// add a zero in front of numbers<10
	m=checkTime(m);
	s=checkTime(s);
	return h+":"+m+":"+s+" "+mo+"/"+d+"/"+y;
}

function log(message){
	var red, blue, reset;
	red   = '\u001b[31m';
	green  = '\u001b[32m';
	yellow   = '\u001b[33m';
	blue  = '\u001b[34m';
	magenta   = '\u001b[35m';
	cyan  = '\u001b[36m';
	white   = '\u001b[37m';
	var color = "white";
	if(color == "red"){
		console.log(cyan + "["+getTime()+"] [Log] " + red +message);
	}
	if(color == "green"){
		console.log(cyan + "["+getTime()+"] [Log] "+ green +message);
	}
	if(color == "yellow"){
		console.log(cyan + "["+getTime()+"] [Log] "+ yellow +message);
	}
	if(color == "blue"){
		console.log(cyan + "["+getTime()+"] [Log] "+ blue +message);
	}
	if(color == "magenta"){
		console.log(cyan + "["+getTime()+"] [Log] "+ magenta +message);
	}
	if(color == "cyan"){
		console.log(cyan + "["+getTime()+"] [Log] "+ cyan +message);
	}
	if(color == "white"){
		console.log(cyan + "["+getTime()+"] [Log] "+ white +message);
	}
	fs.appendFile("log.txt", "["+getTime()+"] [Log] "+message+"\r\n");
}

function command(){
	rl.question(function(answer) {
		if(answer == "stop"){
			log("Server has stopped listening");
			log("Server has stopped");
			log("Server Gracefully Exited");
			rl.close();
			process.exit(code=0)
		}else{
			log(answer + " is nota valid command");
		}
		command();
	});
	}

function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
}

function start(debug, port) {
	log("Server has started.");
  function onRequest(request, response) {
		if(debug == 1){
			log("Request for " +request+ " received.");
		}
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(port);
	log("Started Listening");
	command();
	if(debug == 1){
		setInterval(function(){uptime++;}, 36000000);
		setInterval(function(){log("Uptime (Hours): "+uptime);}, 36000000);
	}
}

exports.start = start;