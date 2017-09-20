var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;
var LocalUser = require('../db/LocalUser');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, function(username, password, done) {
  LocalUser.findOne({
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