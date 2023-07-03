var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

const db = require('../server'); 

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/user');
    }

    next();
}


/* GET users listing. */
router.get('/', checkNotAuthenticated, function(req, res, next) {
    res.render('signup');
});


router.post('/', checkNotAuthenticated, async (req, res, next) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        // Validate the username again as in the client side
        var isValidUsername = /^[a-zA-Z][a-zA-Z0-9_]{2,9}$/.test(username);

        if (!isValidUsername) {
            console.log('Invalid username');
            return res.redirect('./signup');
        }

        // Validate the password again as in the client side
        var isValidPassword = new RegExp(
            '^(?=.*[a-z])' + // must contain at least one lower case letter
            '(?=.*[A-Z])' +  // must contain at least one upper case letter
            '(?=.*[0-9])' +  // must contain at least one digit
            '(?=.*[!@#$%^&*])' + // must contain at least one special char
            '.{8,20}$' // must be at least 8 characters long and less than 20 chars
        ).test(password);

        if (!isValidPassword) {
            console.log('Invalid password');
            return res.redirect('/signup');
        }

        // Check again whether the username is already exist
        let checkSql = 'SELECT * FROM user WHERE username = ?';
        db.query(checkSql, [username], (err,result) => {
            if (err) throw err;

            if (result.length >0) {
                // Detect username exist
                console.log('Username is already token');
                return res.redirect('./signup');
            }
            else {
                insertUser(req, res);
            }
        });

    } catch {
        console.log(error);
        res.redirect('/signup');
    }
});

/* 
    Insert User into the database
*/

async function insertUser (req, res) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // check user type
    let isUser = (req.body['user-type'] == "user");
    let type;

    // Creator = 0
    // User = 1
    if (isUser) {
        type = 1;
    }
    else {
        type = 0;
    }

   // JSON object
    const user = {
        username: req.body.username,
        password: hashedPassword,
        phone: req.body.phone,
        usertype: type
    };

    let insertSql = 'INSERT INTO user SET ?';

    db.query(insertSql, user, (err) => {
        if (err) throw err;
        console.log("User created successfully");
        res.redirect('/login');
    });
}


// Route to check if a username exists
router.get('/checkUsername/:username', function(req, res) {
    var username = req.params.username;
  
    let checkSql = 'SELECT * FROM user WHERE username = ?';
    db.query(checkSql, [username], (err, result) => {
        if (err) throw err;
  
        if(result.length > 0) {
            // User exists
            res.json({ usernameExists: true });
        } else {
            // User does not exist
            res.json({ usernameExists: false });
        }
    });
  });




module.exports = router;
