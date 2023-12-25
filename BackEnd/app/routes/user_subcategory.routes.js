module.exports = app => {
    const user_subcategory = require("../controllers/user_subcategory.controller.js");
  
    var router = require("express").Router();
  
    // retrieve all subcategory of a user by user id
    router.get("/:id", user_subcategory.findAll);
  
    app.use('/api/user_subcategory', router);
  };
  