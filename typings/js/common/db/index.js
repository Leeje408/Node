var mysql = require('mysql')
var conConfig = require('./connect.json')
var errCode = require('./../errcode.js')

var connection

function connect () {
  if (!conConfig) throw errCode.getErrMessage('2001')
  connection = mysql.createConnection(conConfig)
  connection.connect()
}

function close () {
  connection.end()
}

// mysql 模块 end之后需要重新createConnection
// 使用短连接
function query (sql = '', callback) {
  callback = callback || function (ret) { return ret }
  if (!sql) {
    throw new Error(errCode.getErrMessage(1002))
  }
  connect()
  connection.query(sql, function (err, ret) {
    if (err) {
      throw new Error(err)
    }
    callback(ret)
  })
  close()
}

function test () {
  connect()
  connection.query('SELECT DATE(NOW())', function (err, ret) {
    if (err) throw new Error(err)
    console.log('[TEST] ' + JSON.stringify(ret))
  })
  close()
}

exports.test = test
exports.query = query
