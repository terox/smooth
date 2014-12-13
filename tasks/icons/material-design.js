var gulp         = require('gulp')
  , replace      = require('gulp-replace')
  , _            = require('lodash')
  , iconsManager = require('../../src/extensions/icons')
  , pathTemplate = 'node_modules/material-design-icons/{{set}}/svg/*24px.svg'

/**
 * Gulp task
 *
 * @param config Icon bundle configuration
 * @returns {*}
 */
exports.task = function(config) {

  var paths = []

  _.forEach(config.sets, function(setName) {
    paths.push(pathTemplate.replace('{{set}}', setName));
  });

  return gulp.src(paths)
    .pipe(replace(/<path d="M0 0h24v24h-24z" fill="none"\/>/g, ''))

};

/**
 * Listener function
 *
 * @param codepoints Icon information
 * @param config     Main configuration
 */
exports.codepoints = function(codepoints, config) {

  var icons = {}
    , regex = new RegExp('ic_(.+)_([0-9x]+px)$', 'i')
    , matchs
    , iconName

  _.forEach(codepoints, function(object) {

    matchs   = regex.exec(object.name);
    iconName = matchs[1].replace(/_/gi, '-');

    icons[iconName] = object.codepoint.toString(16);
  });

  iconsManager.add(config, icons);
};