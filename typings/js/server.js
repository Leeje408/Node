// / <reference path="../node/node.d.ts" />
var http = require('http') // 引入http模块
var url = require('url') // 添加url模块

function start (route, handle) {
  http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname
    console.log('request pathname:' + pathname)
    route(handle, pathname, request, response)
  }).listen('8080')
  console.log('Server start,listening on port 8080.')
}

exports.start = start  // 导出函数
