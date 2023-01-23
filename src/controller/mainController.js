exports.getMainPage = (req, res, next) => {
  res.render("main");
};

exports.getNewPostPage = (req, res, next) => {
  res.render("new_post");
};
