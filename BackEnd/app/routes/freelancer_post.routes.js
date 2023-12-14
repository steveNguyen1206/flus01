module.exports = app => {
    const freelancer_post = require("../controllers/freelancer_post.controller.js");
  
    var router = require("express").Router();
  
    // Create a new freelancer_post
    router.post("/", freelancer_post.create);
  
    // Retrieve all freelancer_post
    router.get("/", freelancer_post.findAll);
  
    // // Retrieve all published Category
    // router.get("/published", category.findAllPublished);
  
    // Retrieve a single freelancer_post with id
    router.get("/:id", freelancer_post.findOne);
  
    // Update a freelancer_post with id
    router.put("/:id", freelancer_post.update);
  
    // Delete a Category with id
    router.delete("/:id", freelancer_post.delete);
  
    // // Delete all freelancer_post
    // router.delete("/", category.deleteAll);
  
    app.use('/api/freelancer_post', router);
  };
  