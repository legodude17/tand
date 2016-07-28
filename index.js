'use strict';
var nand = require('node-command');
var O = require('orchestrator');
module.exports = function(){
  var o = new O();
  var tasks = [];
  return {
    start: function (names, cb) {
      if (typeof names === 'function') {
        cb = names;
        names = null;
      }
      o.start.apply(o, (names || tasks).concat(cb));
    },
    tand: {
      task: function (name, deps, cmds) {
        tasks.push(name);
        if (typeof cmd === 'function') {
          o.add(name, deps, cmds);
        } else {
          if (typeof cmds === 'string') {
            cmds = cmds.split(' ');
          }
          o.add(name, deps, function (cb) {
            return nand(cmds.shift(), cmds, null, cb);
          });
        }
      }
    }
  };
};
