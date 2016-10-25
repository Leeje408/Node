// / <reference path="../node/node.d.ts" />
var hiredis = require('hiredis')

function test () {
  var reader = new hiredis.Reader()
  reader.feed('$5\r\nhello\r\n')
  return reader.get()
}

exports.test = test
