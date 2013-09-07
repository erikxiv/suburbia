var _ = require('underscore');
var fs = require('fs');
// var t_start = _.template(fs.readFileSync("./html/test.html").toString());

function start(request, response) {
  console.log("Request handler 'start' was called.");
  //request.getPostData(function (postData) {
    response.writeHead(200, {"Content-Type": "text/html"});
    // response.write(t_start({ text: "Hello World!"}));
    images = fs.readdirSync("public/img/memory");
    images = _.map(images, function(n){ return "img/memory/" + n; });
    response.write(_.template(fs.readFileSync("./html/test.html").toString())({images: images}));
    //response.write("asdf " + postData);
    response.end();
  //});
}

exports.start = start;
