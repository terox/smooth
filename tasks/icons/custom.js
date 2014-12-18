var gulp         = require('gulp')
  , _            = require('lodash')
  , iconsManager = require('../../src/middleware/icons')

/**
 * Default config
 *
 * @type {object}
 */
exports.defaultConfig = {
  fontName : 'custom',
  size     : 24,
  prefix   : 'sm-',
  sets     : []
};

/**
 * Gulp task
 *
 * @param config Icon bundle configuration
 * @returns {*}
 */
exports.task = function(config) {

  return gulp.src(config.sets);

};

/**
 * Listener function
 *
 * @param codepoints Icon information
 * @param config     Main configuration
 */
exports.codepoints = function(codepoints, config) {

  var icons = {}
    , iconName

  _.forEach(codepoints, function(object) {

    iconName = object.name.replace(/_/gi, '-');

    icons[iconName] = object.codepoint.toString(16);
  });

  iconsManager.add(config, icons);
};

