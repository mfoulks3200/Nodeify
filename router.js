function route(pathname, debug) {
	if(debug == 1){
		console.log("Routing request for C:/nodejswebserver/www" + pathname);
	}
}

exports.route = route;