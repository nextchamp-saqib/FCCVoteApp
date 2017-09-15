const fs = require('fs');
const path = require('path');

var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var renderToString = ReactDOMServer.renderToString;

var passport = require('passport');
require('./OAuth/googleStrategy');

//db models
var mongoose = require('mongoose');
var Poll = require('./db/Poll');

router.get('/auth/google',passport.authenticate('google', { 
    scope: ['profile']
}));

router.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: '/' 
}));

router.get('/signout', function(req, res) {
    var id = req.sessionID;
    req.session.destroy();
    res.send(JSON.stringify(id));
});

router.get('/getpolls', function(req, res) {
    Poll.find({}, function(err, data) {
        console.log(data);
        if(data) res.send(data);
        else throw err
    })
})

router.post('/newpoll/poll', function(req, res) {
    var poll = new Poll(req.body);
    poll.save(function(){
        console.log('Saved');
    });
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
    var props = { 
        userAuth: userAuth,
        userID: (userAuth) ? request.session.passport.user : undefined
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