/**
 * Stylus Smooth Middleware
 *
 * @type {exports}
 */

var _      = require('lodash')
  , config = require('../../tasks/config')

/**
 * Get/Set component status (enabled/disabled)
 *
 * @param {object}  name    Component name
 * @param {boolean} enabled Status of module
 *
 * @return void | boolean
 */
function componentStatus(name, enabled) {

  var strName = name.string;

  if(_.isUndefined(enabled)) {
    return config.components[strName].enabled;
  }

  if(!_.isBoolean(enabled)) {
    throw 'Component status need to be boolean'
  }

  config.components[strName].enabled = enabled;
}

/**
 * Get component path
 *
 * @param name        Component name
 *
 * @returns {String}
 */
function componentPath(name) {

  var strName = name.string;

  return _.isUndefined(config.components[strName].path)
    ? strName
    : config.components[strName].path;
}

/**
 * Stylus use middleware
 *
 * @param stylus Stylus
 */
exports.Stylus = function(stylus) {
console.log(stylus)
  // Global imports
  stylus.import(__dirname + '/../components/_variables');

  // Define
  stylus.define('$components', config.components, true)
  stylus.define('smooth-component', componentStatus);
  stylus.define('smooth-component-path', componentPath)

};