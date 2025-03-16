const express = require('express');
const app=express();
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { authenticateUser } = require('../middleware/auth.js');

app.use(express.urlencoded({ extended: false }));

// user registration
router.post("/register", async (req, res)=>{
    console.log(req.body);
    try {
        const {email, password, username} = req.body;

        const encrypted_password = await bcrypt.hash(password, 10);

        const user = new User({
            email: email,
            password: encrypted_password,
            username
        });

        const token = jwt.sign(
            { id: user._id, role: 'user'},
            process.env.JWT_SECRET,
        )

        await user.save();

        res.status(201).json({ message: 'Registration successful. Please log in.' });
    }
    catch (error) {
        res.status(500).json({error: `Registartion failed! ${error}`})
    }
});

// user login
router.post("/login", async (req, res)=> {
    console.log(req.body)

    const {email, password} = req.body;
    const user = await User.findOne({email});

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials'});
    }

    const token = jwt.sign({id: user._id, role: 'user'}, process.env.JWT_SECRET);
    res.json({
        token,
        user: {
          id: user._id,
          email: user.email,
          username: user.username,
        },
    });
});

router.get('/profile', authenticateUser, async(req, res) => {
    console.log(req.user)
    try {
        const user = await User.findById(req.user.id).select('-password'); // Exclude password
        if (!user) {
          return res.status(404).json({ error: 'User not found.' });
        }
        res.json(user);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user data.' });
      }
});


router.get("/register", async (req, res)=>{
    res.send("hello there")
})

module.exports = router;