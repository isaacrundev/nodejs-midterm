const router = require("express").Router();
const postsController = require("../controller/postsController");

router.get("/", postsController.getAllPostsPage);
router.get("/new_post", postsController.getNewPostPage);
router.post("/submit", postsController.postNewPost);

module.exports = router;
