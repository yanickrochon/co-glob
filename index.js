
/**
 * Module dependencies.
 */

var thunk = require('thunkify');
var glob = require('glob');


module.exports = thunk(glob);
