/// <reference path="../node/node.d.ts" />

var server = require('./server.js'); //添加HTTP服务
var router = require('./router.js'); //添加router服务
var requestHandlers = require('./requestHandlers.js'); 

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;

server.start(router.route,handle);