var _ = require('underscore');
var fs = require('fs');
// var t_start = _.template(fs.readFileSync("./html/test.html").toString());

function start(request, response) {
  console.log("Request handler 'start' was called.");
  //request.getPostData(function (postData) {
    response.writeHead(200, {"Content-Type": "text/html"});
    // response.write(t_start({ text: "Hello World!"}));
    response.write(_.template(fs.readFileSync("./html/test.html").toString())({ text: "Hello World!"}));
    //response.write("asdf " + postData);
    response.end();
  //});
}

exports.start = start;
