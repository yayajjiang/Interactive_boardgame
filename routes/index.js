var express = require('express');
var router = express.Router();

var database = require('../server');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home page'});
});

module.exports = router;

