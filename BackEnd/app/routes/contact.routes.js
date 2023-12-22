module.exports = app => {
    const contact = require("../controllers/contact.controller.js");
    
    var router = require("express").Router();
    
    // Create a new Category
    router.post("/", contact.create);
    
    // Retrieve all Category
    router.get("/", contact.findAll);
    
    // // Retrieve all published Category
    // router.get("/published", category.findAllPublished);
    
    // Retrieve a single Category with id
    router.get("/:id", contact.findOne);
    
    // Update a Tutorial with id
    router.put("/:id", contact.update);
    
    // Delete a Category with id
    router.delete("/:id", contact.delete);
    
    // // Delete all Tutorials
    // router.delete("/", category.deleteAll);
    
    app.use('/api/contact', router);
    }