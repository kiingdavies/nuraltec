const homeController = require("../app/http/controllers/homeController");

function initRoutes(app) {
    // Get Home Page would render the index function in homeController
    app.get("/", homeController().index);
  
    // Get About us Page
    // app.get("/about", aboutController().index);
  
    // Get projects Page
    // app.get("/projects", projectsController().index);
  
    // Get Contact Page
    // app.get("/contact", contactController().index);
    
  }
  
  module.exports = initRoutes;