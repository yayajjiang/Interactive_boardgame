var express = require('express');
var router = express.Router();

const database = require('../server');

router.get('/', function(req, res, next) {
    res.render('login');
});

router.post('/', function(req, res, next) {
  console.log("Get inside router.");
  var user_name = req.body.username;
  console.log("🚀 ~ file: login.js:13 ~ router.post ~ user_name:", user_name)

  var user_password = req.body.password;
  console.log("🚀 ~ file: login.js:16 ~ router.post ~ user_password:", user_password)

  // if(user_name && user_password) {
  //   let sql = `SELECT * FROM User WHERE username = ?`;

  //   database.query(sql, [user_name], (err, data) => {
  //     if (err) {
  //       console.error('An error occurred while executing the query');
  //       throw err;
  //     }

  //     if (data.length > 0) {
  //       bcrypt.compare(user_password, data[0].password, function(err, result) {
  //         if(err) {
  //           console.error('An error occurred while comparing the passwords');
  //           throw err;
  //         }

  //         if(result) {
  //           // Login successful
  //           res.send("Login successful");
  //         } else {
  //           // Passwords don't match
  //           res.status(401).send("Invalid username or password");
  //           return;
  //         }
  //       });
  //     } else {
  //       // User not found
  //       res.status(401).send("Invalid username or password");
  //     }
  //   });
  // }
});

// router.get('/logout', (req, res, next) => {
//   req.session.destroy();
//   res.redirect("/");
// });

module.exports = router;
