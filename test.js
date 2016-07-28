'use strict';

var assert = require('assert');

module.exports = function (tand) {
  tand.task('minify', [], 'uglifyjs index.js --mangle --compress --output index.min.js');
};