const express = require('express');
const morgan = require('morgan')
const app = express();

app.use(morgan('dev'));

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render("index");
})

app.get('/about',(req,res) => {
    res.send("About Page");
})

app.get('/Profile',(req,res) => {
    res.render("profile");
})

app.get('/get-form-data', (req,res) => {
    console.log(req.query)
    res.send("Data Received");
})

app.listen(3000);