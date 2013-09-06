var express = require("express");
var app = express();
//var http = require("http");

function start(route, port) {
/*  function onRequest(request, response) {
  	// Add callback function to get POST data
  	request.getPostData = function(callback) {
  		var postData = "";
  		request.addListener("data", function(data) {
  			postData += data;
  		});
  		request.addListener("end", function() {
  			callback(postData);
  		});
  	}
  	
    route(request, response);
  }

  http.createServer(onRequest).listen(port);*/
  app.configure(function () {
    app.engine('html', require('uinexpress').__express)
    app.set('view engine', 'html')
  });
  app.use(express.favicon());
  app.use(express.static(__dirname + '/../public', { maxAge: oneDay }));
  app.use(express.logger());
  app.get("/", route["/"]);
  app.listen(port);
  console.log("Server has started listening on port " + port);
}

exports.start = start;
