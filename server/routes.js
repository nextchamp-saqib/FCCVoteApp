const fs = require('fs');
const path = require('path');
var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var renderToString = ReactDOMServer.renderToString;
var App = require('../public/Components/app');


router.get('/',(req, res) => {
    var html = fs.readFileSync(
        path.resolve(__dirname, '../client/index.html'),'utf-8'
    );
    var renderString = renderToString(
        React.createElement(App)
    );
    var render = html.replace('{SSR}',renderString)
    res.send(render);
});

module.exports = router;