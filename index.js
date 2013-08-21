var server = require("./server");
var router = require("./router");
fs = require('fs');
server.start(router.route,1, 8888);