//index.js
//Start this file to init server
var server = require("./server");
var config = require("./config");
server.start(config.port);
