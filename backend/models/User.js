const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    username: {type: String},
    reviewsPosted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review'}],
    isAnonymous: {type: Boolean, default: false},
})

module.exports = mongoose.model('User', userSchema); // users collections is made