const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;


//The browser goes to localhost:3000, makes a request 
//to 'GET'(app.get) a response
//and the server sends (response.send) a response
app.get('/', function(req, res) {
    res.send("Hello, Newman");
    console.log(req);
});
app.get('/hobbies', function(req, res) {
    res.send("Motorcycle life");
    console.log(req);
});

app.get('/about', function(req, res){
    res.send("<p>I am Yemi George. Master of indepth thinking in multiple topics and proficient in arguing terribly with anyone.</p>");
})

app.listen(port, function(){
    console.log("Server listening at port 3000");
});