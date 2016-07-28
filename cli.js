#!/usr/bin/node
'use strict';

var pkg = require('./package.json');
var tand = require('./');
var minimist = require('minimist');
var path = require('path');
var argv = minimist(process.argv.splice(2), {
  alias: {
    'f': 'file'
  }
});
var fs = require('fs');
function getFile() {
  console.log(argv);
  if (argv.file) {
    return path.resolve(argv.file);
  }
  var files = fs.readdirSync(process.cwd()), file;
  files.forEach(function (v) {
    if (v.indexOf('file.js') !== -1) {
      file = v;
    }
  });
  return file;
}
var file = getFile();
var t = tand();
console.log(file);
require(file)(t.tand);
t.start(function (err) {
  if (err) {
    console.error(err);
    process.exit(1);
    return;
  }
  console.log('Ok');
  process.exit(0);
});