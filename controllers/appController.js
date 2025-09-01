async function signUpFormGET(req, res) {
  res.render("sign-up-form", { title: "Sign Up Form" });
}

module.exports = { signUpFormGET };
