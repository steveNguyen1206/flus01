module.exports = (app) => {
    const smsController = require("../controllers/sms.controller.js");

    var router = require("express").Router();

    router.post("/send-code", smsController.sendCode);

    router.post("/verify-code", smsController.verifyCode);

    app.use("/api/sms", router);
}