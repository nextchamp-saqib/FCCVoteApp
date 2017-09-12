const fs = require('fs');
const path = require('path');

var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var renderToString = ReactDOMServer.renderToString;

var passport = require('passport');
require('./OAuth/googleStrategy');

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
})

router.get('*', function(request, response) {
    var props = { userAuth: request.isAuthenticated() };

    ReactRouter.match({
        routes: require('../client/routes'),
        location: request.url
    }, function(error, redirectLocation, renderProps) {
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