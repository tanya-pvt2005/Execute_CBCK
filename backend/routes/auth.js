const express = require('express');
const app=express();
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(express.urlencoded({ extended: false }));

// user registration
router.post("/register", async (req, res)=>{
    console.log(req.body);
    try {
        
        const email = req.body.email;
        const password = req.body.password;

        const encrypted_password = await bcrypt.hash(password, 10);

        const user = new User({
            email: email,
            password: encrypted_password,
        });

        await user.save();

        res.redirect("http://localhost:5173/")
    }
    catch (error) {
        res.status(500).json({error: `Registartion failed! ${error}`})
    }
});

// user login
router.post("/login", async (req, res)=> {
    const user = await User.findOne({email: req.body.email });

    console.log(req.body.email);

    try {
        const match = await bcrypt.compare(req.body.password, user.password);
        // const accessToken = jwt.sign(JSON.stringify(user), process.env.TOKEN_SECRET)
        if (match) {
            res.send("matched");
        }
        else {
            res.send("ohno not matched");
        }
    }
    catch (error) {
        console.log(error);
    }
})

router.get("/register", async (req, res)=>{
    console.log("hello")
})

module.exports = router;