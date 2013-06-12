
var Style = require('..');
var assert = require('assert');

describe('Styl', function(){
  describe('.use()', function(){
    it('should work', function(done){
      var style = new Style('body { color: blue }');

      style.use(function(style){
        assert(style);
        done();
      });
    })
  })
})
