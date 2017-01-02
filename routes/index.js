var router = require('express').Router();
var fs = require('fs');
var shitHelper = require('../models/shit_helper');

/* GET home page. */
router.get('/', function(req, res, next) {
  var title = '0';
  var days = ['fire', 'diamond', 'club', 'heart', 'spade', 'sun', 'snow'];
  var day = ['./banner/', days[new Date().getDay()], '.html'].join('');
  var shits = shitHelper.getShits();
  res.render('index', { title: title, day_html: day, shits: shits });
});

router.get('/me', function(req, res, next) {
  res.render('about');
});

module.exports = router;
