const express = require('express');
const app=express();
const router = express.Router();
const Business = require("../models/Business");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {authenticateBusiness} = require("../middleware/auth.js")

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
  

router.get("/register", async (req, res)=>{
    console.log("hello")
})

module.exports = router;