
/**
 * Module dependencies.
 */

var whitespace = require('css-whitespace');
var mixins = require('rework-mixins');
var rework = require('rework');
var mixin = require('rework-plugin-mixin');
var ease = require('rework-plugin-ease');
var colors = require('rework-plugin-colors');
var references = require('rework-plugin-references');
var at2x = require('rework-plugin-at2x');
var inherit = require('rework-inherit');

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
  this.delegate(['use']);
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
  this.use(mixin(mixins));
  this.use(ease());
  this.use(colors());
  this.use(references());
  this.use(at2x());
  this.use(inherit());
  return this.rework.toString({ compress: this.compress });
};
