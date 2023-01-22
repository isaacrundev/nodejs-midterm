exports.getLoginPage = (req, res, next) => {
  res.render("login");
};

exports.getSignUpPage = (req, res, next) => {
  res.render("signup");
};

exports.postLogin = (req, res, next) => {
  const { username, password } = req.body;
  username === "abc" && password === "123"
    ? res.render("main")
    : res.redirect("/");
};
