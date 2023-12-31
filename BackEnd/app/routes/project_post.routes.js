module.exports = (app) => {
    const projectPostController = require("../controllers/project_post.controller.js");

    var router = require("express").Router();

    // Create a new Project_post
    router.post("/create", projectPostController.createProjectPost);

    // Retrieve all Project_posts (belongs to a user) from the database
    router.get("/findAll/:userId", projectPostController.findAllProjectPosts);
    
    // change status of many project_posts by list of project_post_id
    router.put("/changeStatus", projectPostController.changeStatus);

    app.use("/api/project_post", router);
}