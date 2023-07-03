const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('./server');

function initialize(passport) {
    // Get the user by username
    const getUserByUsername = async (username) => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM user WHERE username = ?';
            db.query(sql, [username], (err, result) => {
                if (err) reject(err);
                resolve(result[0]);
            });
        });
    }

    const authenticateUser = async (username, password, done) => {
        const user = await getUserByUsername(username);
        // If no User found
        if(user == null) {
            return done(null, false, { message: 'Username or Password Wrong.'});
        }

        try {
            // check if password is matched
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            }
            else {
                return done(null, false, { message: 'Username or Password Wrong.'});
            }
        }
        catch (err) {
            return done(err);
        }
    };

    passport.use(new LocalStrategy({ usernameField: 'username'}, 
    authenticateUser));
    passport.serializeUser((user, done) => {done(null, user.id)});
    passport.deserializeUser((id, done) => {
        let sql = 'SELECT * FROM user WHERE id = ? ';
        db.query(sql, [id], function(err, rows) {
            done(err, rows[0]);
        });
    });

}

module.exports = initialize;
