const express = require('express')
const mysql = require('mysql')

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'BoardGameDB',
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('BoardGame Database Connected');
});

module.exports = db;


/*
    Automatically create connection
*/

// const mysql = require('mysql');
// const pool = mysql.createPool({
//   connectionLimit : 10,
//   host            : 'localhost',
//   user            : 'root',
//   password        : '',
//   database        : 'BoardGameDB'
// });

// module.exports = pool;