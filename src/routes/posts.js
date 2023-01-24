const router = require("express").Router();
const postController = require("../controller/postController");

router.get("/", postController.getAllPostsPage);
router.get("/new_post", postController.getNewPostPage);
router.post("/submit", postController.postNewPost);

module.exports = router;
