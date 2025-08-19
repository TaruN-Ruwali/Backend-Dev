const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render("profile");
})

app.get('/about',(req,res) => {
    res.send("About Page");
})

app.get('/Profile',(req,res) => {
    res.render("profile");
})

app.listen(3000);