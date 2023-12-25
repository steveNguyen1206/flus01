const {verifyToken} = require('../middleware/authJwt.js');
const { isOwner, isMember } = require('../middleware/project.middleware.js');

module.exports = app => {
    const project = require("../controllers/project.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/",  project.create);
  
    // Retrieve project by id
    router.get("/:id", [verifyToken, isMember], project.findMemberOne);
  
    router.get("/own/:id", [verifyToken, isOwner], project.findOwnerOne);


    // Retrieve a single Tutorial with id
    // router.get("/:id", project.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", [verifyToken], project.update);
  
    // Delete a Tutorial with id
    // router.delete("/:id", project.delete);
  
    // Delete all projects
    // router.delete("/", project.deleteAll);
  
    app.use('/api/project',  router);
  };