module.exports = (app) => {
    const freelancerPostController = require("../controllers/freelancer_post.controller.js");

    var router = require("express").Router();

    // Create a new Freelancer_post
    router.post("/create", freelancerPostController.createFreelancerPost);

    // Retrieve all Freelancer_posts (belongs to a user) from the database
    router.get("/findAll/:userId", freelancerPostController.findAllFreelancerPosts);

    // Change status of many freelancer_posts by list of freelancer_post_id
    router.put("/changeStatus", freelancerPostController.changeStatus);

    // Find and change status of freelancer_posts by some criteria
    router.put("/findAndChangeStatus/:userId&:status", freelancerPostController.findAndChangeStatus);
  
    // // Create a new freelancer_post
    // router.post("/", freelancer_post.create);
  
    // // Retrieve all freelancer_post
    // router.get("/", freelancer_post.findAll);
  
    // // // Retrieve all published Category
    // // router.get("/published", category.findAllPublished);
  
    // // Retrieve a single freelancer_post with id
    // router.get("/:id", freelancer_post.findOne);
  
    // // Update a freelancer_post with id
    // router.put("/:id", freelancer_post.update);
  
    // // Delete a Category with id
    // router.delete("/:id", freelancer_post.delete);
  
    // // // Delete all freelancer_post
    // // router.delete("/", category.deleteAll);
  
    app.use('/api/freelancer_post', router);
  };
  