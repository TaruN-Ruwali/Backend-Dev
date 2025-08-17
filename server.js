const http = require('http');  // Importing the http module

const server = http.createServer((req, res) => {  // Creating an HTTP server
    
    console.log(req.url);  // Logging the request URL to the console

    if(req.url == "/about") {  // Checking if the request URL is '/about'
        res.end('The about Page');  // Responding with "The about Page"
    }

    if(req.url == "/profile") {  // Checking if the request URL is '/'
        res.end('The profile Page');  // Responding with "The profile Page"
    }

    res.end('Hello, World!');   // Responding with "Hello, World!"
});         

server.listen(3000)     // Server listens on port 3000