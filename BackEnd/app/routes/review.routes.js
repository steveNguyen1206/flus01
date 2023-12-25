const { authJwt } = require("../middleware");
const review_controller = require("../controllers/review.controller.js");

module.exports = (app) => {
  var router = require("express").Router();

  router.get("/get_rating_client/:id", review_controller.getRatingClient);


  app.use("/api/review", router);
};
