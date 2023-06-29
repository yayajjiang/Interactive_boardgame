var express = require('express');
var router = express.Router();
const database = require('../server');

router.get('/', function(req, res, next) {
    res.render('login');
});

router.post('/login', function(req, res, next) {

  console.log("Get inside router.");
  var user_name = req.body.username;
  console.log("🚀 ~ file: login.js:13 ~ router.post ~ user_name:", user_name)

  var user_password = req.body.password;
  console.log("🚀 ~ file: login.js:16 ~ router.post ~ user_password:", user_password)

});

module.exports = router;