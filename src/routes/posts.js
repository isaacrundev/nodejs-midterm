const router = require("express").Router();
const postsController = require("../controller/postsController");

router.get("/", postsController.getAllPostsPage);
router.get("/new_post", postsController.getNewPostPage);
router.get("/edit/:id", postsController.getPostsById);
router.post("/edit/:id", postsController.postEditPostById);
router.post("/submit", postsController.postNewPost);
router.delete("/delete/:id", postsController.postDeletePost);

module.exports = router;
