const fs = require('fs');
const path = require('path');

var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var renderToString = ReactDOMServer.renderToString;

router.get('*', function(request, response) {
    var props = { title: 'Universal React' };

    ReactRouter.match({
        routes: require('../client/routes'),
        location: request.url
    }, function(error, redirectLocation, renderProps) {
        if (renderProps) {
            var html = ReactDOMServer.renderToString(
                <ReactRouter.RouterContext {...renderProps}
                    createElement={function(Component, renderProps) {
                        return <Component {...renderProps} />;
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