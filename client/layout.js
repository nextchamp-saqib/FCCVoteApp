import React, { Component } from 'react';
var NavBar = require('../public/Components/nav');

class Layout extends Component {
    render() {
        var custom = this.props.custom;
        return (
            <html>
                <head>
                    <title>VoteApp</title>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" href="/styles/bootstrap-4.0.0-alpha.6-dist/css/bootstrap.min.css" />
                    <link href="/styles/jquery-3.2.1.slim.min.js" />
                    <link href="/styles/bootstrap-4.0.0-alpha.6-dist/css/bootstrap.min.js" />
                    <link rel="stylesheet" href="/styles/main.css" />
                </head>
                <body>
                    <NavBar custom={custom}/>
                    {this.props.children}
                    <script dangerouslySetInnerHTML={{
                        __html: 'window.PROPS=' + JSON.stringify(custom)
                    }} />
                    <script src="/bundle.js"></script>
                </body>
            </html>


        );
    }
}

module.exports = Layout;