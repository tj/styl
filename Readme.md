
# Styl

  Spirtual successor of [Stylus](https://github.com/LearnBoost/stylus) built on top of [Rework](https://github.com/visionmedia/rework). Styl is basically an opinionated configuration of Rework, and does not aim for feature parity
  with Stylus. If your application benefits from a runtime (conditionals, loops etc) Stylus or SASS is for you, if your application benefits from
  incredibly fast builds, simplicity, and the most transparent CSS preprocessor around Styl is for you.

  Building Styl on top of Rework drastically reduces complexity, as Rework itself is comprised of multiple smaller pieces and plugins. If you wish to include custom plugins or configure Styl beyond its defaults the interface is the same as Rework.

## Installation

```
$ npm install -g styl
```

## Features

  All of the Rework features and plugins are available immediately with no configuration including:

    - automatic vendor-prefixed properties
    - automatic vendor-prefixed values
    - automatic vendor-prefixed keyframes
    - additional easing functions
    - transparent support for retina resolution images
    - rgba color helpers (`rgba(#fc0, .5)`)
    - property reference support (`height: @width`)
    - several [mixins](https://github.com/visionmedia/rework-mixins)
    - optional whitespace significant syntax
    - placeholder selectors
    - selector extensions
    - parent selector reference
    - nested selectors
    - command-line executable

## styl(1)

```

  Usage: styl [options]

  Options:

    -h, --help            output usage information
    -V, --version         output the version number
    -v, --vendors <list>  vendor prefixes to apply [o,ms,moz,webkit]
    -w, --whitespace      use significant whitespace pre-processor

```

## License

  MIT
