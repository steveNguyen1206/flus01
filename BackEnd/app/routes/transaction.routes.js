module.exports = app => {
    const transaction = require("../controllers/transaction.controller.js");
    
    var router = require("express").Router();
    
    // Create a new Category
    router.post("/", transaction.create);
    
    // Retrieve all Category
    router.get("/", transaction.findAll);
    
    // // Retrieve all published Category
    // router.get("/published", category.findAllPublished);
    
    // Retrieve a single Category with id
    router.get("/:id", transaction.findOne);
    
    // Update a Tutorial with id
    router.put("/:id", transaction.update);
    
    // Delete a Category with id
    router.delete("/:id", transaction.delete);
    
    // // Delete all Tutorials
    // router.delete("/", category.deleteAll);
    
    app.use('/api/transaction', router);
    }