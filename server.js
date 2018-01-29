// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models/index");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
//=============================================================
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


// Sets up the handlebars
//=============================================================
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
//=============================================================
app.use(express.static("public"));

// Routes - (listed under controllers)
// =============================================================
// var routes = require("./controllers/user_controller.js");

// app.use(routes);

// Routes for handlebar views
// =============================================================

//index view
app.get('/', function (req, res){
    //asks to signup or login
    res.render('index');
  });
  //About page
app.get('/about', function(req, res){

    res.render('about');
  });
  //SIGN UP
  app.get('/signup', function(req, res){
    res.render('signup');
  });
//SEARCH VIEW
app.get('/search', function(req, res){
    res.render('search');
    });
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});