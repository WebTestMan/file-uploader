const { Router } = require("express");
const fileRouter = Router();
const appController = require("../controllers/appController");

fileRouter.get("/sign-up-form", appController.signUpFormGET);
fileRouter.post("/sign-up", appController.createUser);
fileRouter.get("/", async (req, res) => {
  const users = await appController.getUsers();

  res.render("index", { title: "Homepage", users: users });
});

module.exports = fileRouter;
