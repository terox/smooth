var pkg = require('../package.json');

module.exports = {

  name       : pkg.name,
  theme      : 'flat',
  compress   : false,
  standalone : false,

  path: {
    target         : 'build/',

    build_package  :  pkg.name,
    build_fonts    :  pkg.name + '/fonts/',
    build_docs     : 'docs/',
    build_examples : 'examples/',


    components     : 'src/components',
    themes         : 'src/themes',
    fonts          : 'dist/',
    extension      : 'src/extensions',
    tasks          : 'tasks/',
    docs           : 'docs/',
    examples       : 'docs/examples'
  },

  server: {
    port       : 8081,
    path       : 'build/',
    livereload : true
  },

  components: {
    '_normalize' : {
      path    : __dirname + '/../node_modules/stylus-normalize/normalize.styl',
      enabled : true
    },
    'animation'  : { enabled: true },
    'button'     : { enabled: true },
    'containers' : { enabled: true },
    'flex'       : { enabled: true },
    'font'       : { enabled: true },
    'form'       : { enabled: true },
    'grid'       : { enabled: true },
    'icon'       : { enabled: true },
    'image'      : { enabled: true },
    'main'       : { enabled: true },
    'media'      : { enabled: true }
  },

  extensions: [

  ],

  // Icons bundles
  icons: [
    /*{
      bundle   : 'material-design',
      fontName : 'material',
      size     : '24px',
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
    }*/
  ]

};