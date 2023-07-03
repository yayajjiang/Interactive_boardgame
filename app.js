// Load in env variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var userRouter = require('./routes/user');
var signupRouter = require('./routes/signup');
var forgetPwRouter = require('./routes/forgetPassword');

var app = express();

const flash = require('express-flash');
const session = require('express-session');
const passport = require('passport');
const initializePassport = require('./passport-config'); 

const methodOverride = require("method-override");

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,  // no change don't save
  saveUninitialized: false  // if no value don't save
}));
app.use(flash());

// Initialize Passport
initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/signup', signupRouter);
app.use('/forgetpw', forgetPwRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
