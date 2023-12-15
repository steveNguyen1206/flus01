module.exports = (app) => {
    const projectController = require("../controllers/project.controler.js");
    const upload = require('../middleware/multer.js');
    const router = require("express").Router();

    router.post("/create",upload.single('image'), projectController.create);
    router.post("/update",upload.single('image'), projectController.update);
    app.use("/api/project", router);
};
