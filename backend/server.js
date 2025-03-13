require('dotenv').config(); //to access the .env file

const express = require('express');
const app=express();

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('HELLO WORLD from SERVER')
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})