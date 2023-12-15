const { authJwt } = require("../middleware");
const user_controller = require("../controllers/user.controller.js");

module.exports = (app) => {
  var router = require("express").Router();

  // Retrieve all Users
  router.get("/", user_controller.findAll);

  // Retrieve a single User with id
  router.get("/:id", user_controller.findOnebyId);

  // Retrieve a single User with account_name
  router.get("/account_name/:account_name", user_controller.findOnebyAccountName);
  
  // Retrieve a single User with email
  router.get("/email/:email", user_controller.findOnebyEmail);

  // Route to get users by page and size
  router.get('/getusers/:page&:size&:searchKey', user_controller.findUsersbyPage);

  // Update a User with id
  router.put("/:id", user_controller.update);

  // Update avatar of a user
  router.put("/avatar/:id", user_controller.updateAvatar);

  // Delete a User with account_name
  router.delete("/account_name", user_controller.deleteOnebyAccountName);

  // Delete a User with reportedTimes
  router.delete("/reported_times", user_controller.deleteOnebyReportedTimes);

  app.use("/api/user", router);
};
