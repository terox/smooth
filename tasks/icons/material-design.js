var gulp         = require('gulp')
  , replace      = require('gulp-replace')
  , _            = require('lodash')
  , iconsManager = require('../../src/middleware/icons')
  , pathTemplate = 'node_modules/material-design-icons/{{set}}/svg/production/*24px.svg'

/**
 * Default config
 *
 * @type {object}
 */
exports.defaultConfig = {
  fontName : 'material',
  size     : 24,
  prefix   : 'md-',
  sets     : [
    'action',
    'alert',
    'av',
    'communication',
    'content',
    //'device', // Some issues with double color
    'editor',
    'file',
    'hardware',
    'image',
    'maps',
    'navigation',
    'notification',
    'social',
    'toggle'
  ]
};

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
    // Apperently solved in commit:
    // https://github.com/google/material-design-icons/commit/a288bd9ffc0667026b8d156a06563cda803ed0a8
    //.pipe(replace(/<path d="M0 0h24v24h-24z" fill="none"\/>/g, ''))

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