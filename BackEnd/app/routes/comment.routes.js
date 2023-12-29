module.exports = (app) => {
    const comment = require("../controllers/comment.controller.js");
    let router = require("express").Router();

    // Create a new Comment
    router.post("/", comment.create);

    // Retrieve a single Comment with id
    router.get("/:id", comment.findOne);

    // Retrieve all Comments by Project ID
    router.get("/findCommentByProjectId/:project_id", comment.findCommentByProjectId);

    // Retrieve all Comments by User ID
    router.get("/findCommentByUserId/:user_id", comment.findCommentByUserId);

    // delete a Comment with id
    router.delete("/:id", comment.delete);

    app.use("/api/comment", router);
  };