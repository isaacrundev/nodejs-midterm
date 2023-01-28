const Post = require("../model/Post_Model");
const Comment = require("../model/Comment_Model");

exports.getAllPostsPage = async (req, res) => {
  const Username = req.session.userid;

  const comments = await Comment.find()
    .then(([commentsData]) => {
      return commentsData;
    })
    .catch((err) => console.error(err.message));
  const articles = await Post.find()
    .then(([articlesData]) => {
      return articlesData;
    })
    .catch((err) => console.error(err.message));

  res.render("posts", {
    articles: articles.map((a) => ({
      ...a,
      comments: comments.reduce((acc, curr) => {
        if (curr.Article_ID === a.Id) {
          acc.push(curr);
        }
        return acc;
      }, []),
    })),
    username: Username,
  });
};

exports.getNewPostPage = (req, res) => {
  res.render("new_post");
};

exports.postNewPost = (req, res) => {
  const { Title, Content } = req.body;
  const Username = req.session.userid;

  const newPost = new Post(Username, Title, Content);
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
  const Id = req.params.id;
  const { Title, Content } = req.body;
  Post.Update(Title, Content, Id)
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

exports.postNewComment = (req, res) => {
  const Username = req.session.userid;
  const { Article_ID, CommentInput } = req.body;
  const newComment = new Comment(Article_ID, Username, CommentInput);
  newComment
    .save()
    .then(() => {
      res.redirect("/posts");
    })
    .catch((err) => console.error(err.message));
};
