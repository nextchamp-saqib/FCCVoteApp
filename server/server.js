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

var url = "mongodb://thefalconx33:falconx33@freedb-shard-00-00-m2zez.mongodb.net:27017,freedb-shard-00-01-m2zez.mongodb.net:27017,freedb-shard-00-02-m2zez.mongodb.net:27017/voteapp?ssl=true&replicaSet=FreeDB-shard-0&authSource=admin";
mongoose.connect(url,{
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
     secret: 'asfdgafgreadsvb', resave: false, saveUninitialized: false,
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
