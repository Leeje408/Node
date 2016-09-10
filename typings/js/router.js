//路由
/// <reference path="../node/node.d.ts" />

function route(handle, pathname, response, postData) {
    console.log("router:" + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response,postData);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("404 Not found");
        response.end();
    }
}
exports.route = route;