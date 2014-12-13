var gulp         = require('gulp')
  , _            = require('lodash')
  , iconsManager = require('../../src/middleware/icons')

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
    , regex = new RegExp('ic_(.+)_([0-9x]+px)$', 'i')
    , matchs
    , iconName

  _.forEach(codepoints, function(object) {

    //matchs   = regex.exec(object.name);
    iconName = object.name.replace(/.svg/gi, '');

    icons[iconName] = object.codepoint.toString(16);
  });

  iconsManager.add(config, icons);
};

