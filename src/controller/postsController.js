const Post = require("../model/Post_Model");

exports.getAllPostsPage = (req, res) => {
  Post.find()
    .then(([articles]) => {
      console.log(articles);
      res.render("posts", { articles: articles });
    })
    .catch((err) => console.error(err.message));
};

exports.getNewPostPage = (req, res) => {
  res.render("new_post");
};

exports.postNewPost = (req, res) => {
  const { Title, Content } = req.body;

  const newPost = new Post(Title, Content);
  newPost
    .save()
    .then(() => {
      res.redirect("/posts");
    })
    .catch((err) => console.error(err.message));
};

exports.getPostsById = (req, res) => {
  const id = req.params.id;
  Post.findById(id)
    .then(([data]) => {
      res.render("edit_post", { data: data });
    })
    .catch((err) => console.error(err.message));
};

exports.postEditPostById = (req, res) => {
  const id = req.params.id;
  const { Title, Content } = req.body;
  const data = { Id: id, Title: Title, Content: Content };
  Post.Update(data)
    .then(() => {
      res.redirect("/posts");
    })
    .catch((err) => console.error(err.message));
};

exports.postDeletePost = (req, res) => {
  const id = req.params.id;

  Post.Delete(id)
    .then(() => {
      res.redirect("/posts");
    })
    .catch((err) => console.error(err.message));
};
