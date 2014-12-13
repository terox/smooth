/**
 * Stylus Icons Middleware
 *
 * @type {exports}
 */

var mapping = {}

/**
 * Add icons set to stack
 *
 * @param {Object} config Icon config
 * @param {Object} icons  Key-Value Object (Name-Codepoint)
 */
var add = function(config, icons) {

  mapping[config.fontName] = {
    options : config,
    icons   : icons
  };

  return this;
};

/**
 * Get the path of icon font
 *
 * @param {String}   Font name
 * @returns {String}
 */
var path = function(fontName) {
  var font = mapping[fontName.string];
  return font.options.fontPath + font.options.fontName;
};

/**
 * Get the prefix of icon font
 *
 * @param fontName   Font name
 * @returns {String}
 */
var prefix = function(fontName) {
  return mapping[fontName.string].options.prefix;
};

/**
 * Get icons set of font
 *
 * @param fontName
 * @returns {*|icons|exports.icons}
 */
var icons = function(fontName) {

  var icons = mapping[fontName.string].icons;

  // FIXME small workaround until Stylus 1.0
  // Documented issue: https://github.com/LearnBoost/stylus/issues/1440
  // It would be a solution: https://github.com/LearnBoost/stylus/issues/1286
  if(1 === Object.keys(icons).length) {
    icons[''] = '';
  }

  return icons;
};

exports.add = add;


exports.Stylus = function(stylus) {

  // Define
  stylus.define('$fonts', Object.keys(mapping))
  stylus.define('smooth-icon-path', path)
  stylus.define('smooth-icon-prefix', prefix)
  stylus.define('smooth-icon-set', icons)

};