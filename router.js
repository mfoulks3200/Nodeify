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
}

function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
}

function route(pathname, debug) {
	if(debug == 1){
		log("Routing request for C:/nodejswebserver/www" + pathname);
	}
	response.write("routed");
}

exports.route = route;