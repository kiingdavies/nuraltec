// const Menu = require("../../models/menu");

function contactController() {
    return {
     index(req, res) {
        
      //   res.render('home');
     res.send('Contact page');
      },
    };
  }
  
  module.exports = contactController;