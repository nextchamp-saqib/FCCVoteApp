var mongoose = require('mongoose');

var optionSchema = new mongoose.Schema({
    option: String,
    voters: Array
});

var pollSchema = new mongoose.Schema({
    userID: String,
    name: String,
    title: String,
    options: [optionSchema],
    pollVoters: Array
});



var Poll = mongoose.model('poll', pollSchema);

module.exports = Poll;