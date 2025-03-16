const express = require('express');
const app=express();
const router = express.Router();
const Business = require("../models/Business");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {authenticateBusiness} = require("../middleware/auth.js")
const {authenticateUser} = require("../middleware/auth.js")

app.use(express.urlencoded({ extended: false }));

// business registration
router.post("/register", async (req, res)=>{
    console.log(req.body);
    try {
        const {email, password, companyName, industry} = req.body;

        const encrypted_password = await bcrypt.hash(password, 10);

        const business = new Business({
            email: email,
            password: encrypted_password,
            companyName, 
            industry,
        });

        await business.save();

        const token = jwt.sign({ id: business._id, role: 'business'}, process.env.JWT_SECRET);

        res.status(201).json({ token });
    }
    catch (error) {
        res.status(500).json({error: `Registration failed! ${error}`})
    }
});

// business login
router.post("/login", async (req, res)=> {
    console.log(req.body)

    const {email, password} = req.body;
    const business = await Business.findOne({email});

    if (!business || !(await bcrypt.compare(password, business.password))) {
        return res.status(401).json({ error: 'Invalid credentials'});
    }

    const token = jwt.sign({id: business._id, role: 'business'}, process.env.JWT_SECRET);
    res.json({
        token,
        business: {
          id: business._id,
          email: business.email,
          companyName: business.companyName,
        },
    });
});

router.get('/profile', authenticateBusiness, async (req, res) => {
    try {
      console.log("business: "+ req.business); // Log the business data from the token
      const business = await Business.findById(req.business.id).select('-password'); // Exclude password
      if (!business) {
        return res.status(404).json({ error: 'Business not found.' });
      }
      res.json(business);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch business data.' });
    }
});

// routes/businessRoutes.js
router.get('/topReviews', authenticateBusiness, async (req, res) => {
    try {
      // Fetch the business profile with reviews populated
      const business = await Business.findById(req.business.id).populate('reviews.userId', 'username');
      if (!business) {
        return res.status(404).json({ message: 'Business not found' });
      }
  
      // Sort reviews by createdAt (most recent first) and get the top 5
      const topReviews = business.reviews
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by most recent
        .slice(0, 5); // Get top 5 reviews
  
      res.json(topReviews);
    } catch (err) {
      console.error('Failed to fetch reviews:', err.message || err);
      res.status(500).json({ message: 'Failed to fetch reviews', error: err.message });
    }
});
  
// routes/businessRoutes.js
router.post('/reviews/:reviewId/reply', authenticateBusiness, async (req, res) => {
    const { reviewId } = req.params;
    const { reply } = req.body;
  
    if (!reply) {
      return res.status(400).json({ message: 'Reply cannot be empty' });
    }
  
    try {
      const business = await Business.findOne({ 'reviews._id': reviewId });
      if (!business) {
        return res.status(404).json({ message: 'Review not found' });
      }
  
      // Find the review and update the reply
      const review = business.reviews.id(reviewId);
      review.reply = reply;
  
      // Ensure required fields are present
      if (!business.industry) {
        business.industry = 'Not specified'; // Provide a default value
      }
  
      // Ensure each review has a rating
      business.reviews.forEach((r) => {
        if (!r.rating) {
          r.rating = 0; // Provide a default value
        }
      });
  
      await business.save(); // Save the updated business document
  
      res.json({ message: 'Reply submitted successfully', review });
    } catch (err) {
      console.error('Failed to submit reply:', err.message || err);
      res.status(500).json({ message: 'Failed to submit reply', error: err.message });
    }
  });

router.get("/register", async (req, res)=>{
    console.log("hello")
})

module.exports = router;