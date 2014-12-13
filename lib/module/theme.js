var ncp    = require('ncp').ncp
  , fs     = require('fs')
  , _      = require('lodash')
  , sefini = require('../')
  , config = require('../../tasks/config')

/**
 *
 * @param customConfig
 * @param themeName
 * @param dest
 */
exports.fork = function(customConfig, themeName, dest) {

  var customConfig = _.merge(customConfig, {
    theme: themeName,
    path: {
      themes: dest
    }
  });

  console.log('Forking...', config.path.themes + '/' + themeName, dest)




  ncp(config.path.themes + '/' + themeName, dest, function(err) {

    fs.writeFile(
      process.cwd() + '/' + sefini.defaultConfigFileName,
      JSON.stringify(customConfig, null, 2),
      function(err) {

        console.log('guardado',process.cwd() + sefini.defaultConfigFileName, customConfig)
      }
    );

  });

};

/**
 *
 * @param customConfig
 * @param dest
 */
exports.new = function(customConfig, dest) {

  exports.fork(customConfig, sefini.defaultThemeName, dest);

};