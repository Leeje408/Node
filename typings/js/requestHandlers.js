/// <reference path="../node/node.d.ts" />
var exec = require('child_process').exec,
    querystring = require('querystring'),
    fs = require('fs'),
    formidable = require('formidable');


function start(request, response) {
    console.log("Start.");
    var body = "";
    fs.readFile("./typings/js/view/start.html", "utf8", function (err, data) {
        if (err) {
            console.log(err + "\n");
            fs.readFile("./typings/js/view/404.html", "utf8", function (err, data) {
                if (err) {
                    console.log(err + "\n");
                } else {
                    body = data;
                    response.writeHead(200, { "Content-Type": "text/html" });
                    response.write(body);
                    response.end();
                }
            });
        } else {
            body = data;
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(body);
            response.end();
        }
    });
}

function upload(request, response) {
    console.log("Request handler 'upload' was called.");
    var form = new formidable.IncomingForm();
    form.uploadDir = "tmp"; //指定上传文件目录，解决跨分区重命名
    form.parse(request, function (error, fields, files) {
        console.log("parsing done");
        fs.renameSync(files.upload.path, "./tmp/test.png");
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    });
}

function show(request, response) {
    fs.readFile('./tmp/test.png', 'binary', function (error, file) {
        if (error) {
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(file, 'binary');
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;