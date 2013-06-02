
/**
 * Module dependencies.
 */

var whitespace = require('css-whitespace');
var mixins = require('rework-mixins');
var rework = require('rework');
var props = rework.properties;

/**
 * Expose `Style`.
 */

module.exports = Style;

/**
 * Initialize a new Style with the given css `str`.
 *
 * Options:
 *
 *  - `whitespace` utilize css whitespace transformations
 *  - `compress` enable output compression
 *
 * @param {String} str
 * @param {Object} options
 * @api public
 */

function Style(str, options) {
  if (!(this instanceof Style)) return new Style(str, options);
  options = options || {};
  if (options.whitespace) str = whitespace(str);
  this.str = str;
  this.compress = options.compress;
  this.rework = rework(str);
  this.delegate(['vendors', 'use']);
  this.vendors(['-ms-', '-moz-', '-webkit-']);
}

/**
 * Delegate `methods` to rework.
 *
 * @param {Array} methods
 * @api private
 */

Style.prototype.delegate = function(methods){
  var self = this;
  methods.forEach(function(method){
    self[method] = self.rework[method].bind(self.rework);
  });
};

/**
 * Return the compiled CSS.
 *
 * @return {String}
 * @api public
 */

Style.prototype.toString = function(){
  this.use(rework.mixin(mixins));
  this.use(rework.keyframes());
  this.use(rework.ease());
  this.use(rework.prefixValue('linear-gradient'));
  this.use(rework.prefixValue('radial-gradient'));
  this.use(rework.prefixValue('transform'));
  this.use(rework.prefix(props));
  this.use(rework.colors());
  this.use(rework.references());
  this.use(rework.at2x());
  this.use(rework.extend());
  return this.rework.toString({ compress: this.compress });
};
