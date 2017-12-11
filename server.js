var express = require("express");

var app = express();
var port = process.env.PORT || 8081;

app.get("/",function(req,res){
    var user_name =req.query.user_name;
    res.end("Hello"); 
});

app.listen(port);
console.log("Running from docker!");