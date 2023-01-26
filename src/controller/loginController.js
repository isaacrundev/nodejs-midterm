const User = require("../model/User_Model");

let session;

exports.getLoginPage = (req, res) => {
  res.render("login");
  // session = req.session;
  // if (session.userid) {
  //   res.redirect("/posts");
  // } else {
  //   res.render("login");
  // }
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
      } else {
        session = req.session;
        session.userid = username;
        res.redirect("/posts");
      }
    })
    .catch((err) => console.error(err.message));
};

exports.getLogoutPage = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};

exports.session;
