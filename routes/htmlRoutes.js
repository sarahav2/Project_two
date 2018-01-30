var pageController = require("../controllers/pageView");

module.exports = function(app) {
  app.get("/", pageController.renderHome);

  app.get("/about", pageController.renderAbout);

  app.get("/signup", pageController.renderSignup);

  app.get("/search", pageController.renderSearch);

};