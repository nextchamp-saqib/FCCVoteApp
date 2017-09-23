const fs = require('fs');
const path = require('path');

var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var renderToString = ReactDOMServer.renderToString;

var passport = require('passport');
require('./OAuth/googleStrategy');
require('./OAuth/localStrategy');

passport.serializeUser(function(user, done) {
    done(null, user);
});
  
passport.deserializeUser(function(user, done) {
    done(null,user);
});

//db models
var mongoose = require('mongoose');
var Poll = require('./db/Poll');
var User  = require('./db/User');


router.post('/signup/user', function(req, res) {
    var id = Math.floor(Math.random() * 99999999999999999);
    User.findOne({_id: id, email: req.body.email }, function(err, user) {
       if(user) res.status(500).send('Already exist');
       else{
            var newUser = new User({ 
                _id: id,
                name: req.body.fname +" "+ req.body.lname,
                email: req.body.email,
                password: req.body.passSignup
            })
            newUser.save();
            res.status(200).send('OK');
        }
    });

})

router.post('/login/user', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
}));

router.get('/auth/google',passport.authenticate('google', { 
    scope: ['profile']
}));

router.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: '/' 
}));

router.get('/signout', function(req, res) {
    if(req.isAuthenticated()){
        req.logout();
        req.session.destroy();
        res.redirect('/');
    }else {
        res.redirect('/');
    }
});

router.get('/getpolls', function(req, res) {
    Poll.find({}, function(err, data) {
        if(data){
            res.send(data);
        }
        else throw err
    })
})

router.get('/getuserprofile/:id', function(req, res) {
    var data = {};
    Poll.find({userID: req.params.id}, function(err, polls) {
        data.polls = polls;
        User.findOne({_id: req.params.id}, function(err, user){
            data.user = user;
            data.email = undefined;
            data.password = undefined;
            res.send(data);
        })
    })
});

router.delete('/profile/delete', function(req, res){
    Poll.findByIdAndRemove(req.body.pollID, function(err, data){
        res.status(200).send('OK');
    })
});

router.post('/profile/update/:id', function(req, res) {
    var id = req.params.id;
    User.findOne({_id: id}, function(err, user){
        user.place = req.body.place;
        user.contact = req.body.contact;
        user.name = req.body.name;
        user.save()
        res.send(user);
    })
})

router.post('/newpoll/poll', function(req, res) {
    var poll = new Poll(req.body);
    poll.save();
})

router.get('/getpoll/:id', function(req, res){
    Poll.find({_id: req.params.id }, function(err, data){
        if(data) res.send(data);
        else throw err;
    })
})

router.post('/vote/:id', function(req, res){
    var voteOption = req.body.voteOption;
    var userID = req.body.userID;
    Poll.findById(req.params.id, function(err, data){
        if(data.pollVoters.indexOf(userID)<0){
            data.pollVoters.push(userID);
            data.options.map(function(option, id){
                if(option._id == voteOption)
                    option.voters.push(userID);
            });
            data.save(function(){
                res.send(data);
            });
        }else {
            res.send("Already Voted"); //Implement ChangeVote button
        }
    })
})

router.get('*', function(request, response) {
    var userAuth = request.isAuthenticated();
    var sessionID = request.sessionID;
    var props = { 
        userAuth: userAuth,
        user: (userAuth) ? request.session.passport.user : sessionID
     };

    ReactRouter.match({
        routes: require('../client/routes'),
        location: request.url
    }, function(error, redirectLocation, renderProps) {
        if (redirectLocation) {
            response.redirect(302,
                redirectLocation.pathname + redirectLocation.search
            );
        }
        if (renderProps) {
            var html = ReactDOMServer.renderToString(
                <ReactRouter.RouterContext {...renderProps}
                    createElement={function(Component, renderProps) {
                        return <Component {...renderProps} custom={JSON.stringify(props)} />;
                    }}
                />
            );
            response.send(html);
        } else {
            response.status(404).send('Not Found');
        }
    });
});

module.exports = router;