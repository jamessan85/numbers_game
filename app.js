var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const nunjucks = require('nunjucks');

var app = express();
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'njk');

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
