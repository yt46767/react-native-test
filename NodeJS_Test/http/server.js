var http = require("http");
http.createServer(function(request,response){
  response.writeHead(200,{"Content-Type":"text/plain"});  //response的数据类型为text/plain,输出流为文本
  response.write("hello 1111!");
  response.end();  //response对象封装

}).listen(9999,()=>{
  console.log("Open Services: http://localhost:9999");  //控制台打印
});
