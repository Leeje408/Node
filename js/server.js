var http = require('http'); //引入http模块

http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});  //返回信息头部
    response.write("Hello World!");  //返回信息内容
    response.end();  //结束
}).listen('8080');