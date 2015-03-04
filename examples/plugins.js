var rework = require('rework');
var variant = require('rework-variant');

module.exports = [
  variant(),
  require('autoprefixer').rework()
];
