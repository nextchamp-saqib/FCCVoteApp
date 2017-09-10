const express = require('express');

//react stuff
require('babel-core/register')({
    presets: ['react', 'es2015']
})

//app initialization
const app = express();
const routes = require('./routes');

app.use(express.static('client'));
app.use(express.static('public'));
app.use(routes);


app.listen(8080,()=>{
    console.log('Server listening at 8080');
})
