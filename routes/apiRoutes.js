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
    console.log("Parameter name: "+ req.params.name)
    // findAll returns all entries for a table when used with no options
        db.MP.findAll({
            where: {
                NAME: req.params.name
            }
        }).then(function(data) {
        res.json(data);
    });
  })
};
