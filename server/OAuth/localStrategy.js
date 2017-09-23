var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;
var User = require('../db/User');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, function(username, password, done) {
  User.findOne({
      email: username,
      password: password
    }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
        return done(null, false);
        }
        return done(null, user);
    });
}));