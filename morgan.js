const express = require('express');
const morgan = require('morgan')
const app = express();

app.use(morgan('dev'));

// app.use((req, res, next) => {    //     // This is a middleware function that runs for every request
//     console.log('This is a middleware function');
//     next();
// });

app.set('view engine', 'ejs');

app.get('/',
    (req,res,next) => {  //Creating a middleware function like this run it for / route only

    const a = 10;
    const b = 20;
    console.log(a + b);
    next();     //Very neccessary to call next() to pass control to the next middleware or route handler without which the request will hang indefinitely.

} ,
    (req,res) => {
        
    res.render("index");
})

app.get('/about',(req,res) => {
    res.send("About Page");
})

app.get('/Profile',(req,res) => {
    res.render("profile");
})

app.listen(3000);