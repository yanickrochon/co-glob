var co = require('co');
var glob = require('..');
var assert = require('assert');

describe('glob', function(){
  it('should be wrapped', function(done){
    co(function *(){
      var ret = yield glob('./*');
      assert(ret.length);
    })(done);
  })
})
