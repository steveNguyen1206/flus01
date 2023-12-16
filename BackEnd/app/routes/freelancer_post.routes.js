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

    app.use("/api/freelancer_post", router);
}