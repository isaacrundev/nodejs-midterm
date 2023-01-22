const router = require("express").Router();
const { getMainPage } = require("../controller/mainController");

router.get("/main", getLoginPage);

module.exports = router;
