const mongoose = require("mongoose");

// models/Business.js
const businessSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    industry: { type: String }, // Make industry optional
    reviews: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        review: { type: String, required: true },
        rating: { type: Number }, // Make rating optional
        createdAt: { type: Date, default: Date.now },
        reply: { type: String, default: '' },
      },
    ],
  });

module.exports = mongoose.model('Business', businessSchema); // users collections is made