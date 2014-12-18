# Command Line Interface

## Working with themes

Create new theme:
```
smooth theme new <theme name> [--dest <destination path>]
```

Fork existent theme to do some tweaks:
```
smooth theme fork <theme name> [--dest <destination path]
```

## Testing

Build and start werbserver for testing:
```
smooth watch
```

## Building

Build the project ready to use in production:
```
smooth build [-d, --dest <destination>]
```

**Tip:** you can compile icons set included in Smooth adding 
--icon-[icon-module-name]. For example:
```
smooth build --icon-material-design
```
Note that use this options overrides config in `config.json`
