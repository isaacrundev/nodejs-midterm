exports.getLoginPage = (req, res, next) => {
  res.render("login");
};

exports.getSignUpPage = (req, res, next) => {
  res.render("signup");
};

exports.postLogin = (req, res, next) => {
  const { username, password } = req.body;
  console.log(username, password);
  username === "abc" && password === "123"
    ? res.send(`<h1>Correct</h1>`)
    : res.redirect("/");
};
