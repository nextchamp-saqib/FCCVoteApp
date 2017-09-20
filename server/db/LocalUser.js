var mongoose = require('mongoose');

var LocalUserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

var LocalUser = mongoose.model('localuser', LocalUserSchema);

module.exports = LocalUser;