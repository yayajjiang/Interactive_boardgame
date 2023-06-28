var express = require('express');
var router = express.Router();

var database = require('../server');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home page'});
});

// router.post('/login', function(req, res, next) {

//   var user_name = req.body.username;

//   var user_password = req.body.password;

//   if(user_name && user_password) {
//     let query = `SELECT * FROM BoardGameDB
//     WHERE user_name  = "{user_name}"`;

//     database.query(query,(err,data) => {
//       if(data.length > 0 ){
//         for (var count = 0; count < data.length; count++) {
//           if(data[count].user_password == user_password)
//           {
//             req.session.user_name = data[count].user_name;

//             res.redirect("/");
//           }
//           else{
//             res.send('Incorrect Password');
//           }
//         }
//       }
//       else {
//         res.send("Incorrect Username");
//       }
//       res.end();
//     });
//   }
//   else {
//     res.send('Please Enter User name and Password Details');
//     res.end();
//   }
// });

// router.get('/logout', (req, res, next) => {

//   req.session.destroy();

//   res.redirect("/");
// });

module.exports = router;

