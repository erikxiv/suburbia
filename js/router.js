var url = require("url");

function create(handle) {
	var my = {};

	my.route = function(request, response) {
	    var pathname = url.parse(request.url).pathname;
	    console.log("Request for " + pathname + " received.");

	  if (typeof handle[pathname] === 'function') {
	    handle[pathname](request, response);
	  } else {
	    console.log("No request handler found for " + pathname);
	    response.writeHead(404, {"Content-Type": "text/plain"});
	    response.write("404 Not Found");
	    response.end();
	  }
	}

	return my;
}

exports.create = create;