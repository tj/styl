
var Style = require('..');
var fs = require('fs');
var read = fs.readFileSync;
var readdir = fs.readdirSync;

readdir('test/cases').forEach(function(file){
  if (~file.indexOf('out')) return;
  var base = file;
  var file = __dirname + '/cases/' + file;
  var out = file.replace('.css', '.out.css');
  file = read(file, 'utf8');
  out = read(out, 'utf8');

  describe(base, function(){
    it('should work', function(){
      var style = new Style(file);
      style.toString().trim().should.equal(out.trim());
    })
  })
});
