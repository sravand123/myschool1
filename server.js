var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bcrypt = require("bcrypt");
var Admin = require("./server/models/admin");
var cors = require('cors');
var api = require('./server/routes/api');
var passport = require('passport');

require('./server/models/mongodb');
require('./server/config/passport');
var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, '/dist/myschool-website')));
app.use('/api',api);
app.use(passport.initialize());


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/myschool-website/index.html'));
  });


app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
    
  }
});


app.use(function(err,req, res, next) {
  res.status(404).json({message: ' page not found '}) ;
});


module.exports = app;
app.listen(process.env.PORT);
