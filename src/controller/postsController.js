const Post = require("../model/Post_Model");

exports.getAllPostsPage = (req, res, next) => {
  Post.find()
    .then(([articles]) => {
      console.log(articles);
      res.render("posts");
    })
    .catch((err) => console.error(err.message));
};

exports.getNewPostPage = (req, res, next) => {
  res.render("new_post");
};

exports.postNewPost = (req, res, next) => {
  const { Title, Content } = req.body;

  const newPost = new Post(Title, Content);
  newPost
    .save()
    .then(() => {
      res.redirect("/posts");
    })
    .catch((err) => console.error(err.message));
};

exports.getPostsById = (req, res, next) => {
  const id = req.params.id;
  Post.findById(id)
    .then(res.render(""))
    .catch((err) => console.error(err.message));
};
