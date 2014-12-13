#!/usr/bin/env node

var program      = require('commander')
  , _            = require('lodash')
  , pkg          = require('../package.json')
  , smooth       = require('../lib')
  , customConfig = {}



// GLOBAL OPTIONS
// =============================================================================

program
  .version(pkg.version)
  .option('-c, --config <path>', 'set config file path. Defaults to ./' + smooth.defaultConfigFileName)
  .parse(process.argv)

try {

  if(_.isUndefined(program.config)) {
    program.config = smooth.defaultConfigFileName;
  }

  customConfig = require(process.cwd() + '/' + program.config);

} catch(exception) {}



// COMMANDS
// =============================================================================

// $ smooth theme [action] [name] --dest <destination>
program
  .command('theme [action] [name]')
  .description('Theme actions')
  .option('-d, --dest <destination>')
  .usage('[action]')
  .usage('[name]')
  .action(function(action, name, options) {

    var dest = _.isUndefined(options.dest)
      ? process.cwd() + '/themes/' + name
      : process.cwd() + '/' + options.dest

    smooth.theme[action](customConfig, name, dest);
  });

// $ smooth build --dest <destination>
program
  .command('build')
  .description('Build package')
  .option('-d, --dest <destionation>')
  .action(function(options) {

    customConfig = _.merge(customConfig, {
      compress: true,
      path : {
        target: options.dest
      }
    });

    smooth.build.build(customConfig)
  });

// $ smooth watch
program
  .command('watch')
  .description('Develop and testing')
  .action(function() {
    smooth.build.watch(customConfig)
  });

// $ smooth help
program
  .command('help')
  .description('Displays verbose help')
  .action(function() {
    program.help();
  })

program.parse(process.argv);