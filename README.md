# Smooth
> Small and customizable responsive front-end framework for fast mobile and
> desktop websites development.

**WARNING I AM TESTING AN UPDATING THIS PROJECT. NOT FOR PRODUCTION 2014-12-13**

![](https://github.com/terox/smooth/tree/master/docs/images/screenshot20141213.md)

Smooth comes out of the box with the basic of any RWD framework: grids, flexbox, 
forms... but there are some interesting features:

* **Highly configurable**: You can customize defaults parameters like components 
to use (animations, flex...), theme and many others. You can build your perfect 
stage to start to work. 
<br>
[Read More](#custom-configuration)

* **Command line**: A easy command line interface for build, test or extend the 
framework.
<br>
[Read More](https://github.com/terox/smooth/tree/master/docs/tools/cli.md)

* **Integrate in your building workflow**: Smooth comes with libs that can 
trigger building process from code. Customize the framework in your application 
and compile it at building time.
<br>
[Read More](https://github.com/terox/smooth/tree/master/docs/tools/lib.md)

* **Generation of icon fonts with your SVG**: You don't need go to some online 
tools to generate icon fonts (like .eot, .svg, .ttf and .woff) and copy&past 
ugly CSS to your project. Smooth integrates all in one place without pain.
By default Smooth comes with some modules to integrate third party SVG icons 
easily. Feel [free to contribute with yours](https://github.com/terox/smooth/tree/master/docs/recipes/create_icon_module.md):

    - **Google Material Design Icons** Font (*experimental*)
<br>
[Read More](https://github.com/terox/smooth/tree/master/docs/components/icon.md)

* **[Normalize.css](https://github.com/necolas/normalize.css/ "Normalizce.css")**: 
you can disable module or replace it with your own version easily.
<br>
[Read More](https://github.com/terox/smooth/tree/master/docs/components/normalize.md)

## Getting Started

### Installation

Install and use the foundation in your projects
```
bower install [package name]
```

Install in your NodeJS projects
```
npm install [package name] --save
```

Install, use and customize framework

```
npm install -g [package name]
```

## Custom configuration

This is a custom config file that you can use in your projects:

### Server

When you use `smooth watch`, It creates a small local server for testing propouses:

```json
{
    "server"   : {
        "port"       : 8081,
        "path"       : "/home/user/smooth-project/"
        "livereload" : true
    }
}
```

* **server.port**
    - Type: `integer`
    - Defaults to: **8081**
    - Description: where server must listen the requests.
    
* **server.path**
    - Type: `string`
    - Defaults to: **./**
    - Description: where server must have the root path.
    
* **server.livereload**
    - Type: `boolean`
    - Defaults to: true
    - Description: this option is recommended when you are making changes and 
    you want see the results in realtime in your browser. Requires 
    [LiveReload browser plugin](http://livereload.com/)

### Theme

These options are managed by `smooth theme` command, but you can change it 
manually in config file:

```json
{
    "path" : {
        "themes" : "/home/user/smooth/themes/"
    },
    "theme": "mytheme"
}
```
* **path.themes**
    - Type: `string`
    - Defaults to: *it depends on*
    - Description: Where we find themes
    
* **theme**
    - Type: `string`
    - Defaults to: **flat**
    - Description: Name of theme that we will build

### Components

You can turn on or turn off some Smooth components. Please, keep in mind that
some themes would be able require some components. In this case, theme component
selection **have priority** for a correct build.

```json
{
  "components": {
    "animation"  : { "enabled": true },
    "button"     : { "enabled": true },
    "containers" : { "enabled": true },
    "flex"       : { "enabled": true },
    "font"       : { "enabled": true },
    "form"       : { "enabled": true },
    "grid"       : { "enabled": true },
    "icon"       : { "enabled": true },
    "image"      : { "enabled": true },
    "main"       : { "enabled": true },
    "media"      : { "enabled": true }
  }
}
```
It isn't needed put all components, in your own config file you can put only
the components that you want disable. For example:

```json
{
  "components": {
    "animations" : false
  }
}
```

### Icons

Smooth comes with task that download and compile Material Design icons in fonts.
But you can use your own set of SVG icons and compile it:

```json
  "icons": [
    {
      "fontName": "social",
      "size": "24",
      "prefix": "sf-",
      "sets": [
            { "hello-world" : "icons/hello.svg" }
            { "other" : "icons/other.svg" }
      ]
    }
  ]
```

* **icons.*.fontName**
    - Type: `string`
    - Description: The name of the font.
    
* **icons.*.size**
    - Type: `integer`
    - Unit: pixels
    - Description: The default size of icons
    
* **icons.*.prefix**
  - Type: `string`
  - Description: How you can reference the icon in application. For example:
  
  ```html
    <i class="icon sf-hello-world"></i>
    <i class="icon sf-other"></i>
  ```
  
### Extensions

(Coming soon)

### Other options

```json
{
  "compress": false
}
```
* **compress** 
    - Type: `boolean`
    - Defaults to: **false**
    - Description: minify CSS and Javacripts. 
    - Notes:
            - In Smooth CLI it will be override


## SVG Icons
(Coming soon)

## Contributing
(Coming soon)

## TODO

* [] Tests
* [] **Do a beautiful default theme**
* [] Improve documentation. Improve documentation generator
* [] More and better examples
* [] More components and extensions (modal, responsive menu...)
* [] Themes as bundles: icons, components, extensions... compile at one time
   
## License

[MIT License](https://github.com/terox/smooth/blob/master/LICENSE) 
© [David Pérez Terol](http://www.github.com/terox)