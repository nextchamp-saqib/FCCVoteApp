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
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossOrigin="anonymous" />
                    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossOrigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossOrigin="anonymous"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossOrigin="anonymous"></script>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
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