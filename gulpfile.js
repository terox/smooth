// Packages
var gulp         = require('gulp')
  , gutil        = require('gulp-util')
  //, clean        = require('gulp-clean')
  , header       = require('gulp-header')
  , concat       = require('gulp-concat')
  , uglify       = require('gulp-uglify')
  , minifyCSS    = require('gulp-minify-css')
  , stylus       = require('gulp-stylus')
  , connect      = require('gulp-connect')
  , iconfont     = require('gulp-iconfont')
  , twig         = require('gulp-twig')
  , merge        = require('merge-stream')
  , _            = require('lodash')

  , config       = require('./tasks/config')
  , banner       = require('./tasks/banner')
  , pkg          = require('./package.json')
  , stylusMiddleware = [
    require('./src/middleware/smooth').Stylus,
    require('./src/middleware/icons').Stylus
  ]

global.appRoot = __dirname;

var filename = config.name + (config.compress ? config.name + '.min.css' : '.css')

// Default configuration
// ============================================================================

var source = {

  foundation: [
    __dirname + '/' + config.path.components + '/_bootstrap.styl'
  ],

  theme: [
    __dirname + '/' + config.path.themes + '/' + config.theme + '/_bootstrap.styl'
  ]
};

// Task: build icon fonts
// ============================================================================

gulp.task('icons', function() {

  if(_.isUndefined(config.icons) || 0 === config.icons.length) {
    return gutil.noop;
  }

  var module, streams = []

  _.forEach(config.icons, function(iconSetConfig) {

    if(_.isUndefined(iconSetConfig.bundle)) {
      throw 'Icon set needs a valid bundle property'
    }

    try {

      // Load module
      module = require(__dirname + '/' + config.path.tasks + 'icons/' + iconSetConfig.bundle);

      // Override default configuration
      iconSetConfig = _.merge(module.defaultConfig, iconSetConfig);

      // Add streams
      streams.push(
        module
          .task(iconSetConfig)
          .pipe(iconfont({
            fontHeight       : iconSetConfig.size,
            //normalize        : true,
            fontName         : iconSetConfig.fontName,
            fontPath         : 'fonts/', // FIXME
            prefix           : iconSetConfig.prefix,
            appendCodepoints : false
          }))
          .on('codepoints', module.codepoints)
          .pipe(gulp.dest(config.path.target + config.path.build_fonts))
      );

    } catch(exception) {

      if('MODULE_NOT_FOUND' === exception.code) {

      }

    }

  });

  return merge(streams);
});

// Task: build stylesheets
// ============================================================================

gulp.task('stylus', ['icons'], function() {

  return gulp.src(source.foundation, { read: true })
    .pipe(stylus({
      compress : false,
      errors   : true,
      use      : stylusMiddleware
    }))
    .pipe(concat(filename))
    .pipe(config.compress ? minifyCSS({
      keepSpecialComments : '1'
    }) : gutil.noop())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest(config.path.target + config.path.build_package))
    .pipe(connect.reload());

});

gulp.task('theme', function() {

  return gulp.src(source.theme, { read: true })
    .pipe(stylus({
      compress : false,
      errors   : true,
      use      : stylusMiddleware
    }))
    .pipe(concat(config.name + '.' + config.theme + '.theme.css'))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(config.compress ? minifyCSS({
      keepSpecialComments : '1'
    }) : gutil.noop())
    .pipe(gulp.dest(config.path.target + config.path.build_package))
    .pipe(connect.reload());

});

// Task: documentation
// ============================================================================

gulp.task('docs', function() {

  return gulp.src(config.path.docs + '/site/pages/*.twig')
    .pipe(twig({
      extend: require('./lib/extension/twig.markdown'),
      data: {
        app: {
          base  : '../' + filename
          //theme : config.path.dist + '/' + filename
        }
      }
    }))
    .pipe(gulp.dest(config.path.target + config.path.build_docs))

});

gulp.task('examples', function() {

  return gulp.src(config.path.examples + '/**/*')
    .pipe(gulp.dest(config.path.target + config.path.build_examples))
    .pipe(connect.reload())

});

// Task: server
// ============================================================================

gulp.task('server', function() {

  connect.server({
    port       : config.server.port,
    root       : config.server.path,
    livereload : config.server.livereload
  })

});

// Task: prepare environment
// ============================================================================

gulp.task('clean', function() {

});

// Task: default
// ============================================================================

gulp.task('build', ['theme', 'stylus'], function() {

});

gulp.task('develop', ['theme', 'stylus', 'examples', 'server'], function() {

  gulp.watch(config.path.components + '/**/*', ['stylus']);
  gulp.watch(config.path.themes + '/**/*', ['theme']);
  gulp.watch(config.path.examples + '/**/*', ['examples']);

});