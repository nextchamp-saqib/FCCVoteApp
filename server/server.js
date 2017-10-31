const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
require('dotenv').config();

//db connecttion
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// mongoose.connect(process.env.MONGOURI);
mongoose.connect(process.env.MONGOURI,{
    useMongoClient: true
});
//react stuff
require('babel-core/register')({
    presets: ['react', 'es2015']
})

//app initialization
const app = express();
const routes = require('./routes');

//middlewares
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));
app.use(session({
     secret: 'asfdgafgreadsvb', resave: false, saveUninitialized: true,
     store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('client'));
app.use(express.static('public'));
app.use(routes);


app.listen( process.env.PORT,() => {
    console.log('Server listening at 8080');
})
