const router = require("express").Router();
const { getMainPage, getNewPostPage } = require("../controller/mainController");

router.get("/", getMainPage);
router.get("/new_post", getNewPostPage);

module.exports = router;
