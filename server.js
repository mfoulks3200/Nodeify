var http = require("http");
var log = require("./log");
var url = require("url");
var commands = require('./commands/commands');
var uptime = 0;

function start(debug, port) {
	log.log("Server has started.");
  function onRequest(request, response) {
		if(debug == 1){
			log.log("Request for " +request+ " received.");
		}
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(port);
	log.log("Started Listening");
	if(debug == 1){
		setInterval(function(){uptime++;}, 36000000);
		setInterval(function(){log.log("Uptime (Hours): "+uptime);}, 36000000);
	}
}

exports.start = start;