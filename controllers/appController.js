const prismaDB = require("../db/prisma");

async function signUpFormGET(req, res) {
  res.render("sign-up-form", { title: "Sign Up Form" });
}
const createUser = async (req, res) => {
  await prismaDB.createUser(req.body.name, req.body.email);
  res.redirect("/");
};

const getUsers = async (req, res) => {
  const allUsers = await prismaDB.getAllUsers();
  return allUsers;
};

module.exports = { signUpFormGET, createUser, getUsers };
