module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", user.create);
  
    // Retrieve all Users
    router.get("/", user.findAll);
  
    // Retrieve a single User with id
    router.get("/:id", user.findOnebyId);

    // Retrieve a single User with account_name
    router.get("/:account_name", user.findOnebyAccountName);
  
    // Update a Tutorial with id
    router.put("/:id", user.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/user', router);
  };