var http = require("http");
var url = require("url");
var fs = require("fs");
var uptime = 0;

function getTime(){
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	// add a zero in front of numbers<10
	m=checkTime(m);
	s=checkTime(s);
	return h+":"+m+":"+s;
}

function log(message){
	console.log("["+getTime()+"] "+message);
	fs.appendFile("log.txt", "["+getTime()+"] "+message+"\r\n");
}

function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
}

function start(debug, port) {
  function onRequest(request, response) {
		if(debug == 1){
			log("Request for " + "received.");
		}
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(port);
	log("Server has started.");
	if(debug == 1){
		setInterval(function(){uptime++;}, 36000000);
		setInterval(function(){log("Uptime (Hours): "+uptime);}, 36000000);
	}
}

exports.start = start;