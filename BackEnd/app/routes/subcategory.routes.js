module.exports = app => {
    const subcategory = require("../controllers/subcategory.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Category
    router.post("/", subcategory.create);
  
    // Retrieve all Category
    router.get("/", subcategory.findAll);
  
    // // Retrieve all published Category
    // router.get("/published", category.findAllPublished);
  
    // Retrieve a single Category with id
    router.get("/:id", subcategory.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", subcategory.update);
  
    // Delete a Category with id
    router.delete("/:id", subcategory.delete);
  
    // // Delete all Tutorials
    // router.delete("/", category.deleteAll);
  
    app.use('/api/subcategory', router);
  };
  