# Styl

  Work-in-progress CSS preprocessor.
  Spiritual successor of [Stylus](https://github.com/LearnBoost/stylus).
  Built on top of [Rework](https://github.com/visionmedia/rework).

  Styl is basically an opinionated configuration of Rework. It does not aim for feature parity with Stylus.

  If your application benefits from a runtime (conditionals, loops etc.), then Stylus is for you.
  If your application benefits from incredibly fast builds, simplicity, and the most transparent CSS
  preprocessor around, then Styl is for you.

  Building Styl on top of Rework drastically reduces complexity. That’s because Rework is comprised of multiple
  smaller pieces, plugins, and has no complex runtime. If you wish to include custom plugins, or configure Styl
  beyond its defaults, the interface is the same as Rework.

## Installation

```
$ npm install -g styl
```

or with component:

```
$ component install component/styl
```

or with a script tag using ./styl.js

## Features

  All Rework features and plugins are available out-of-the-box, including:

  - automatic vendor-prefixed properties
  - automatic vendor-prefixed values
  - automatic vendor-prefixed keyframes
  - additional easing functions
  - transparent support for retina hi-res images
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
  -c, --compress        use output compression
```

## Examples

### CSS syntax

  Regular CSS, with no vendor prefixing:

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

  The SASS-style (significant whitespace) syntax supports nesting and parent selector references.
  Currently, the CSS style does not; however this is likely to change in the future.

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

## API

### Styl(string, options)

  Initialize a new `Styl` with the given `string` of regular CSS or
  whitespace-significant style CSS with the following options:

  - `whitespace` enable css whitespace [false]
  - `compress` enable output compression [false]

```js
var styl = require('styl');
var css = styl('body\n  color: blue', { whitespace: true }).toString();
```

### Styl#toString()

  Convert to CSS.

## Projects

  Projects built with Styl:

  - [kube styl](https://github.com/james2doyle/kube-styl) - styl implementation of the "kube" css framework

## License

  MIT
