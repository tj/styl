# Styl

  Work in progress CSS processor, spiritual successor of [Stylus](https://github.com/LearnBoost/stylus) built on top of [Rework](https://github.com/visionmedia/rework). Styl is basically an opinionated configuration of Rework, and does not aim for feature parity
  with Stylus. If your application benefits from a runtime (conditionals, loops etc) Stylus or SASS is for you, if your application benefits from
  incredibly fast builds, simplicity, and the most transparent CSS preprocessor around Styl is for you.

  Building Styl on top of Rework drastically reduces complexity, as Rework itself is comprised of multiple smaller pieces, plugins, and has no complex runtime. If you wish to include custom plugins or configure Styl beyond its defaults the interface is the same as Rework.

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

## Examples

### CSS syntax

  Regular css free of vendor prefixing:

```css
#logo {
  width: 50px;
  height: @width;
  absolute: top 100px left 50%;
  background: linear-gradient(top, black, white);
}
```

  Compiled with the following command:

```
$ styl < simple.css > out.css
```

  Yields:

```css
#logo {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 100px;
  left: 50%;
  background: -o-linear-gradient(top, black, white);
  background: -ms-linear-gradient(top, black, white);
  background: -moz-linear-gradient(top, black, white);
  background: -webkit-linear-gradient(top, black, white);
  background: linear-gradient(top, black, white)
}
```

### Whitespace significant syntax

  The Sass-style whitespace significant syntax supports nesting and parent selector references. Currently the CSS style does not, however this may likely change in the future.

```css

ul
  margin: 0
  li
    list-style: none
    a
      display: block
      text-decoration: none
      padding: 5px 10px
      &:hover
        text-decoration: underline
```

  Compiled with the following command:

```
$ styl -w < simple.styl > out.css
```

  Yields:

```css
ul {
  margin: 0
}

ul li a:hover {
  text-decoration: underline
}

ul li a {
  display: block;
  text-decoration: none;
  padding: 5px 10px
}

ul li {
  list-style: none
}
```


## License

  MIT
