const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    username: {type: String},
    reviews: [
        {
          companyName: { type: String, required: true },
          companyEmail: { type: String, required: true },
          review: { type: String, required: true },
          createdAt: { type: Date, default: Date.now },
        },
      ],
    isAnonymous: {type: Boolean, default: false},
})

module.exports = mongoose.model('User', userSchema); // users collections is made