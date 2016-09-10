/// <reference path="../node/node.d.ts" />
var http = require('http'); //引入http模块
var url = require('url'); //添加url模块

function start(route, handle) {
    http.createServer(function (request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("request pathname:" + pathname);
        var postData = "";
        var content = "";
        request.setEncoding('utf8');
        request.addListener("data", function (postDataChunk) {
            postData += postDataChunk;
            console.log(postData);
        });
        request.addListener("end", function () {
            content = route(handle, pathname, response, postData);
        });
        // response.writeHead(200, { "Content-Type": "text/plain" });  //返回信息头部
        // response.write(content);  //返回信息内容
        // response.end();  //结束
    }).listen('8080');
    console.log("Server start,listening on port 8080.");
}

exports.start = start;  //导出函数