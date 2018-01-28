// *********************************************************************************
// This file offers a set of routes for sending users to the various handlebar views 
// *********************************************************************************

// Dependencies
// =============================================================
var express = require('express');
var router = express.Router();

// var sequelize = require('sequelize');
var Mp = require('../models')['mp'];
var User = require('../models')['user'];

//index view
router.get('/', function (req, res){
  //asks to signup or login
  res.render('index');
});
  
  //SIGN UP
  router.get('/signup', function(req, res){
    res.render('signup');
  });
  
  router.post('/signup', function(req, res){
    //creates new user from valid form
    //if the email exists
    console.log(req.body);
  
     User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
  
     res.redirect('login');
  });

  //LOGIN
router.get('/login', function(req, res){
    res.render('login');
  });
  
  
  router.post('/login', function(req, res){
    console.log(req.body);
  
    User.findAll({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then(function(data){
     
        if(data != ""){
          res.redirect('/user');
        } else{
          //need to add message saying the password and user didn't match
          res.redirect('/login')
        }
    });
  
  });
  module.exports = router;