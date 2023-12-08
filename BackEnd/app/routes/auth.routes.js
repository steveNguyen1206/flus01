const { verifySignUp } = require("../middleware");
const auth_controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  var router = require("express").Router();

  router.post(
    "/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      // verifySignUp.checkRolesExisted
    ],
    auth_controller.signup
  );

  router.post("/signin", auth_controller.signin);
  router.post("/googleLogin", auth_controller.googleLogin);

  app.use("/api/auth", router);
};