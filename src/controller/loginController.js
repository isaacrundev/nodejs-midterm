const User = require("../model/User_Model");

exports.getLoginPage = (req, res) => {
  res.render("login");
};

exports.getSignUpPage = (req, res) => {
  res.render("signup");
};

exports.postSignUp = (req, res) => {
  const { Username, Password } = req.body;

  const newUser = new User(Username, Password);
  newUser
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.error(err.message));
};

exports.postLogin = (req, res) => {
  const { username, password } = req.body;
  User.validate(username, password)
    .then(([data]) => {
      if (data.length === 0) {
        res.redirect("/");
      }
      res.redirect("/posts");
    })
    .catch((err) => console.error(err.message));

  // if (username === "abc" && password === "123") {
  //   res.redirect("/posts");
  // } else {
  //   res.redirect("/");
  // }
};

exports.getLogoutPage = (req, res) => {
  res.redirect("/");
};
