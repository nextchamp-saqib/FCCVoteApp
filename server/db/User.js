var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: String,
    password: String,
    contact: Number,
    place: String
})

var User = mongoose.model('user', userSchema);

module.exports = User;