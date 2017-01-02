var router = require('express').Router();
var shitHelper = require('../models/shit_helper');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var shits = shitHelper;
  res.render('index', {shits: 1});
});

router.get('/:shit_id', function(req, res, next) {
  var shit = shitHelper;
  res.render('shits', {shit: shit.getShit(req.params['shit_id'])});
});

module.exports = router;
