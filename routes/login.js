var express = require('express');
var router = express.Router();

const db = require('../server');
var passport = require('passport');


function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
      return res.redirect('/user');
  }

  next();
}

router.get('/', checkNotAuthenticated, function(req, res, next) {
    res.render('login');
});

router.post('/', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: "/user", //redirect to home page on successful login
  failureRedirect: '/login', // redirect back to login page on login failure
  failureFlash: true// allow flash message (display message to the user)
}));



module.exports = router;
