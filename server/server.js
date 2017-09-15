const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const expressSession = require('express-session');
require('dotenv').config();

//db connecttion
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/voteapp',{
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
app.use(expressSession({
     secret: 'asfdgafgreadsvb', resave: false, saveUninitialized: true,
     store: new (require('express-sessions'))({
        storage: 'mongodb',
        instance: mongoose, 
        host: 'localhost', 
        port: 27017,
        db: 'voteapp',
        collection: 'sessions',
        expire: 86400
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('client'));
app.use(express.static('public'));
app.use(routes);


app.listen(process.env.PORT,() => {
    console.log('Server listening at 8080');
})
