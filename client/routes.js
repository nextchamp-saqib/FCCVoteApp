var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var RouterContext = ReactRouter.RouterContext;
var match = ReactRouter.match;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var App = require('../public/Components/app');
var Layout = require('./layout');
var Home = require('../public/Components/home');
var Login = require('../public/Components/login');
var Signup = require('../public/Components/signup');
var Profile = require('../public/Components/profile');

if (typeof window === 'object') {
    function createElement(Component, props) {
        return <Component {...props} custom={window.PROPS} />;
    }
}

var routes = (
    <Router history={browserHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Home} />
            <Route path="login" component={Login}/>
            <Route path="signup" component={Signup}/>
            <Route path="profile" component={Profile}/>
        </Route>
    </Router>
);

module.exports = routes;