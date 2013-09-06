var server = require("./server");
//var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;

var port = process.env.PORT || 8888;
//server.start(router.create(handle).route, port);
server.start(handle, port);
