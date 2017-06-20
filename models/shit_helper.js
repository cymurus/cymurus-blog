var fs = require('fs');
var _ = require('underscore');
var dataHelper = require('../utils/data_helper');
var conf = require('../config.js')

var shitRoot = [conf['root'], conf['data'], 'shits'].join('/');

var shitHelper = module.exports = function() {
  return this;
};

shitHelper.getShit = function(title) {
  var shit = {};
  if(!this._checkExists(title)) {
    return shit;
  }
  var path = [shitRoot, title].join('/');
  shit = dataHelper.get(path, 'yaml');
  return shit;
};

// shitHelper.getShits = function() {
//   var shits = [];
//   fs.readdir(shitRoot, function(err, files) {
//     if(err) {
//       throw new Error(err);
//     }
//     files.forEach(function(file) {
//       shits.push(shitHelper.getShit(file));
//     });
//   });
//   return shits;
// };

shitHelper.getShits = function() {
  return shitHelper._getShits(false);
};

shitHelper._checkExists = function(title) {
  return fs.existsSync([conf['root'], conf['data'], 'shits', title].join('/'));
};

shitHelper._getShits = function(all) {
  var shits = [];
  var files = fs.readdirSync(shitRoot);
  files.forEach(function(file) {
      if(!file.indexOf('_')) return;
      shits.push(shitHelper.getShit(file));
  });
  shits = _.sortBy(shits, function(shit) {
    return -(new Date(shit.time).getTime());
  });
  return shits;
}