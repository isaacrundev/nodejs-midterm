exports.getLoginPage = (req, res, next) => {
  res.render("login");
};

exports.getSignUpPage = (req, res, next) => {
  res.render("signup");
};

exports.postLogin = (req, res, next) => {
  const { username, password } = req.body;
  if (username === "abc" && password === "123") {
    res.send(`<h2>Login Successful</h2>`);
  } else {
    res.send(`<h2>Login Failed</h2>`);
  }
};

exports.getLogoutPage = (req, res, next) => {
  res.render("logout");
};
