var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

const db = require('../server'); 

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('signup');
});

router.post('/', async (req, res, next) => {
    // try {
    //     // hash the password
    //     const hashedPassword = await bcrypt.hash(req.body.password, 10);

    //     // First check if username already exists
    //     let checkSql = 'SELECT * FROM employee WHERE username = ?';
    //     db.query(checkSql, [user.username], (err, result) => {
    //         if (err) throw err;

    //         if(result.length > 0) {
    //             // User exists
    //             console.log('Username is already taken');
    //             res.redirect('/signup');
    //         } else {
    //             // User does not exist, proceed to insert
    //             let insertSql = 'INSERT INTO employee SET ?';
                
    //             // JSON Object
    //             const user = {
    //                 username: req.body.username,
    //                 password: hashedPassword,
    //                 phone: req.body.phone
    //             };

    //             db.query(insertSql, user, (err) => {
    //                 if(err) throw err;
    //                 console.log("User created successfully");
    //                 res.redirect('/login');
    //             });
    //         }
    //     });

    // } catch (error) {
    //     console.log(error);
    //     res.redirect('/signup');
    // }
});

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
