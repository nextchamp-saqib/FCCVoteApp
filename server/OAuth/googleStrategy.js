var passport = require('passport')
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
var User = require('../db/User');
require('dotenv').config();

passport.use(new GoogleStrategy({
   clientID:     process.env.google_client_id,
   clientSecret: process.env.google_client_secret,
   callbackURL: "/auth/google/callback",
   passReqToCallback   : true
 }, 
 function( request, accessToken, refreshToken, profile, done) {
   User.findOne({ _id: profile.id }, function (err, user) {
       if(user) 
            return done(err, user);
       else
        user = new User({
            _id: profile.id,
            name: profile.displayName
        })
        user.save(function(err,user){
            return done(err, user.id);
        })
   });
 }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});
  
passport.deserializeUser(function(user, done) {
    done(null,user);
});
