module.exports = (app) => {
    const paypalController = require("../controllers/paypal.controller.js");

    var router = require("express").Router();

    router.post("/create-orders", paypalController.apiCreateOrders);

    router.post("/orders/:orderID/capture", paypalController.apiCaptureOrder);
    router.post("/createPayoutBatch", paypalController.apiCreatePayoutBatch);

    app.use("/api/paypal", router);
}