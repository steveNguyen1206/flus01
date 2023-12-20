module.exports = (app) => {
    const bid = require("../controllers/bid.controller.js");
    let router = require("express").Router();

    // Create a new Bid
    router.post("/", bid.create);
  
    app.use("/api/bid", router);
  };