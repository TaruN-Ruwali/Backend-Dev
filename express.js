const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send("Heloo World");
})

app.get('/about',(req,res) => {
    res.send("About Page");
})

app.get('/Profile',(req,res) => {
    res.send("Profile Page");
})

app.listen(3000);