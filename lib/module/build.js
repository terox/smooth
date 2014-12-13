require('../../gulpfile.js')

var config = require('../../tasks/config')
  , _      = require('lodash')
  ,  gulp  = require('gulp')

// FIXME In Gulp 4.0 gulp.start will change. Please keep it in mind!

exports.build = function(customConfig) {

  config = _.merge(config, customConfig, {
    compress: true
  });

  process.nextTick(function() {
    gulp.start('build')
  });
};

exports.watch = function(customConfig) {

  config = _.merge(config, customConfig, {
    compress: false
  });

  process.nextTick(function() {
    gulp.start('develop')
  });
};