let passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
let mongoose  = require('mongoose');
let bcrypt  = require('bcrypt');
let Admin = require('../models/admin');

passport.use(new LocalStrategy(
    function(username, password, done) {
      Admin.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        bcrypt.compare(password,user.password,function(err,result){
          if(err){
            return done(err);
          }
          if(!result){
            return done(null, false, { message: 'Incorrect password.' });  
          }
          if(result){
            return done(null, user);
          }
        });
      });
    }
  ));