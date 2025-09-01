const { Router } = require("express");
const fileRouter = Router();
const appController = require("../controllers/appController");

fileRouter.get("/sign-up-form", appController.signUpFormGET);
fileRouter.get("/", (req, res) => res.render("index", {title: "Homepage"}));

module.exports = fileRouter;
