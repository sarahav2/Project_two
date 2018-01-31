// *********************************************************************************
//  This file offers a set of routes for displaying the data from the db
// *********************************************************************************

// Dependencies
// =============================================================
// Requiring the model
var db = require("../models");
var pageController = require("../controllers/pageView");

// Routes
// =============================================================
module.exports = function(app) {
    // GET route for getting all of the todos
    app.get("/api/results/:name", function(req, res) {
    console.log("Parameter name: " + req.params.name)
    // findAll returns all entries for a table when used with no options
        db.MP.findAll({
            where:{
                name: req.params.name
            }
        }).then(function(data){
            res.render('results', {MisPer: data})
        });
    });
            // where:{
            //     name: req.params.name
            // }
        // }).then(function(dbMP) {
      // We have access to the todos as an argument inside of the callback function
        //  res.json(dbMP);
        // pageController.renderSearch();
        // });
       
    
    // )
    // app.get("/api/results", function(req, res) {
    //     res.render('results', {MisPer:dbMP})})
};
