exports.getLoginPage = (req, res, next) => {
  res.render("login");
};

exports.getSignUpPage = (req, res, next) => {
  res.render("signup");
};

exports.postLogin = (req, res, next) => {
  const { username, password } = req.body;
  if (username === "abc" && password === "123") {
    res.redirect("/posts");
  } else {
    res.redirect("/");
  }
};

exports.getLogoutPage = (req, res, next) => {
  res.render("logout");
};
