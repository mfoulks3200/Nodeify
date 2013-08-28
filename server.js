var http = require("http");
var log = require("./log");
var fs = require('fs');
var url = require("url");
path = require('path');
var commands = require('./commands');
var uptime = 0;

function start(debug, port) {
	log.log("Server has started");
	var ports = port;
	exports.ports = ports;
  function onRequest(request, response) {
		var file = null;
		try {
			file = path.normalize(decodeURI(url.parse(request.url).pathname));
		} catch (e) {
		}
		if (file.substring(file.length-1) == "\\"){
			file = file + "index.html";
		}
		file = "www"+file
		if(debug == 1){
			log.log("Request for " + file.substring(4) + " received");
		}
		fs.exists(file, function(exists) {
		  if (exists) {
			fs.readFile(file, "binary", function(err, file) {  
				if(err) {  
					response.wireHead(500, {"Content-Type": "text/plain"});  
					response.write(err + "\n");  
					response.end(); 
					log.log("Request for " + file.substring(4) + " returned with error code " + err);
					return;  
				}  
				
				response.writeHead(200);  
				response.write(file, "binary");  
				response.end();  
				log.log("Request for " + file.substring(4) + " fufilled");
			});  
		  } else {
			response.writeHead(404, {"Content-Type": "text/html"});
			response.write("Error 404: File not Found");
			response.end();
			log.log("Request for " + file.substring(4) + " could not be located");
		  }
		});
	}
	
	http.createServer(onRequest).listen(port);
	log.log("Started Listening");
	commands.listen();
	if(debug == 1){
		setInterval(function(){uptime++;}, 36000000);
		setInterval(function(){log.log("Uptime (Hours): "+uptime);}, 36000000);
	}
}

exports.start = start;