var fs = require('fs');
var yaml = require('js-yaml');
var basename = require('path').basename;

var dataHelper = module.exports = function() {
  return this;
};

dataHelper.get = function(path, ext) {
  var _ext = ~ext.indexOf('.') ? ext : '.' + ext;
  var _path = [path, basename(path)].join('/');
  var object = {};
  object = yaml.safeLoad(fs.readFileSync([_path, _ext].join(''), 'utf-8'));
  object.date = dataHelper._formatDate(object.date);
  object.body = fs.readFileSync(_path, 'utf-8');
  object.body = dataHelper._formatText(object.body);
  return object;
};

dataHelper._formatDate = function(date) {
  console.log(date);
  var month = (1 + date.getMonth()).toString();
  if(month.length == 1) {
    month = '0'.concat(month);
  }
  var day = date.getDate().toString();
  if(day.length == 1) {
    day = '0'.concat(day);
  }
  var hour = date.getHours().toString();
  if(hour.length == 1) {
    hour = '0'.concat(hour);
  }
  var minute = date.getMinutes().toString();
  if(minute.length == 1) {
    minute = '0'.concat(minute);
  }
  return [[1900 + date.getYear(), month, day].join('-'), [hour, minute].join(':')].join(' ');
};

dataHelper._formatText = function(text) {
  var fmt = '';
  var lines = text.split('\n');
  lines.forEach(function(line) {
    if(!line) {
      console.log("caonimalegiusrgsiuncseiisejciuanesiuvisenvi");
      line = '<br>';
    }
    var fmtLine = ['<p>', line, '</p>'].join('');
    fmt = fmt.concat(fmtLine);
  });
  return fmt;
};