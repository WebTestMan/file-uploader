const path = require("node:path");
const { Pool } = require("pg");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const fileRouter = require("./routes/fileRouter");
const LocalStrategy = require("passport-local").Strategy;
const assetsPath = path.join(__dirname, "public");

// const pool = new Pool({
//   // add your configuration
// });

const app = express();
app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
// app.use(passport.session());
// app.use(express.urlencoded({ extended: false }));

app.use("/", fileRouter);

app.listen(3000, (error) => {
  if (error) {
    throw error;
  }
  console.log("app listening on port 3000!");
});
