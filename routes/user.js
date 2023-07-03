var express = require('express');
var router = express.Router();

const db = require('../server');

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/user');
    }

    next();
}

router.get('/', checkAuthenticated, function(req, res, next) {
    res.render('user', {user: req.user});
});

// Route to handle logout
router.delete('/logout', (req, res) => {
    // wait for the session destroy before redirect
    req.session.destroy(() => {
        res.clearCookie('connect.sid');
        res.redirect('/login');
    });
});



module.exports = router;
