const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    companyName: {type: String, required: true}, // Myntra
    industry: {type: String}, // Fashion
    reviewsReceived: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
})

module.exports = mongoose.model('Business', businessSchema); // users collections is made