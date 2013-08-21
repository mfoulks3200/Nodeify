var http = require("http");
var url = require("url");
var uptime = 0;

function upTime(interval){
	uptime++;
	if(uptime % interval == 0){
		console.log("Uptime: "+uptime);
	}
}

function start(route, debug, port) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
	if(debug == 1){
		console.log("Request for " + pathname + " received.");
	}
    route(pathname, debug);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(port);
  console.log("Server has started.");
  setInterval(upTime(5), 1000);
}

exports.start = start;