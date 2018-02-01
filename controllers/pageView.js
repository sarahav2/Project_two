module.exports = {

  renderHome: function (req, res){
      //asks to signup or login
      res.render('index');
    },
    //About page
  renderAbout: function (req, res){
      res.render('about');
    },
    //SIGN UP
    renderSignup: function (req, res){
      res.render('signup');
    },
  //SEARCH VIEW
  renderSearch: function (req, res){
      res.render('search');
      }
};
