var fs = require('fs');
var basename = require('path').basename;

var regSep = /[*-\./]{5,}/;

var dataHelper = module.exports = function() {
  return this;
};

dataHelper.get = function(path) {
  var object = {};
  var file = fs.readFileSync(path, 'utf-8');
  var tmp = file.split(regSep);
  object.title = tmp[0].trim();
  object.time = tmp[1].trim();
  object.body = dataHelper._formatText(tmp[2].trim());
  return object;
};

dataHelper._formatText = function(text) {
  var fmt = '';
  var lines = text.split('\n');
  lines.forEach(function(line) {
    line = line.trim();
    if(!line) {
      line = '<br>';
    }
    var fmtLine = ['<p>', line, '</p>'].join('');
    fmt = fmt.concat(fmtLine).concat('\n');
  });
  return fmt;
};