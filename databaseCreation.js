/*
 For the first time set up DataBase Usage
*/

// Create the Database
const db = require('./server');
const express = require('express');
const app = express();


app.get('/createDB', (req, res) => {
    let sql = 'CREATE DATABASE BoardGameDB';
    db.query(sql, err => {
        if(err) {
            throw err;
        }
        res.send('BoardGameDB Created');
    })
});

// Create a table
app.get('/createUserAccount', (req, res) => {
    let sql = 'CREATE TABLE User\
    (id int AUTO_INCREMENT PRIMARY KEY,\
        username VARCHAR(50) NOT NULL,\
        password VARCHAR(255) NOT NULL,\
        phone VARCHAR(20) NOT NULL,\
        type TINYINT(1) NOT NULL DEFAULT 1)';

    db.query(sql, err => {
        if (err) {
            throw err;
        }
        res.send('UserAccount table created');
    });
});

// Insert an account
app.get('/User1', (req, res) => {
    let user1 = 
    {
        username: 'root',
        password: 'admin',
        phone: '6268002222'
    };

    let sql = 'INSERT INTO USER SET ?';

    let query = db.query(sql,user1, err => {
        if (err) {
            throw err;
        }
        res.send('User1 added');
    });
});

// app.get('/AddColumn', (req, res) => {
//     let sql = 'ALTER TABLE user ADD COLUMN usertype TINYINT(1) NOT NULL DEFAULT 1';
//     db.query(sql, err => {
//         if (err) {
//             throw err;
//         }
//         res.send('User Type column Added');
//     });

// })

app.listen('3000', () => {
    console.log("Server Started at Port 3000");
})