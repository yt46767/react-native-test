var http = require("http");
var url = require("url");

function start(route){
  function onRequest(request,response){debugger;
    var pathname = url.parse(request.url).pathname;
    console.log("Request for "+pathname+" received.");

    route(pathname);

    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("hello world");
    response.end();
  }

  http.createServer(onRequest).listen(9990);
  console.log("Server has started");
}

exports.start = start;
