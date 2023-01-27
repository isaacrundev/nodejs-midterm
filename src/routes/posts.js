const router = require("express").Router();
const { checkSession } = require("../util/checkSession");
const postsController = require("../controller/postsController");

router.get("/", checkSession, postsController.getAllPostsPage);
router.get("/new_post", checkSession, postsController.getNewPostPage);
router.get("/edit/:id", checkSession, postsController.getPostsById);
router.post("/edit/:id", checkSession, postsController.postEditPostById);
router.post("/submit", checkSession, postsController.postNewPost);
router.delete("/delete/:id", checkSession, postsController.postDeletePost);
router.post("/post_comment", checkSession, postsController.postNewComment);
module.exports = router;
