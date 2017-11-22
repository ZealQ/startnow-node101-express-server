// import files and packages up here
// var data is the veriable that  will then require ./data.jason to pull infor form that file
var data = require("./data.json");

// create your express server below
// the ree vars below are ones that we are going to use through out the coding prosses expressand morgan we installed
var express = require("express");
var morgan = require("morgan");
var app = express();

// add your routes and middleware below
//app.use will be performed each time tha page is loaded 
// app.use(morgan("dev")); is a way for the  server to log in a developer made format
app.use(morgan("dev"));
// app.get ("/") will pull anything after the forward slash in the url
app.get("/", function(req, res) {
    // res. status will give the page a 200(ok) message it is req to have .send and  epmty strin after
    res.status(200).send("easy");
});
//app.get("/data") will then give  you a log the data 
app.get("/data", function(req , res){
    //it is then req that you have status 200 and send (data) and this is what  will be loged  
 res.status(200).send(data);
});



// finally export the express application
module.exports = app
