// / <reference path="../node/node.d.ts" />
var gulp = require('gulp')
var webpack = require('webpack')
gulp.task('default', function () {
  // gulp default todo
  // gulp.start('webpack')
})

gulp.task('webpack', function () {
  // webpack todo
  var config = {
    entry: {
      index: ''
    }
  }
  webpack(config, function () {})
})
