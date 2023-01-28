const router = require("express").Router();
const { checkSession } = require("../util/checkSession");
const postsController = require("../controller/postsController");

router.use(checkSession);

router.get("/", postsController.getAllPostsPage);
router.get("/new_post", postsController.getNewPostPage);
router.get("/edit/:id", postsController.getPostsById);
router.post("/edit/:id", postsController.postEditPostById);
router.post("/submit", postsController.postNewPost);
router.delete("/delete/:id", postsController.postDeletePost);
router.post("/post_comment", postsController.postNewComment);
module.exports = router;
