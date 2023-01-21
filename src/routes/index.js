const router = require("express").Router();
const { getLoginPage } = require("../controller/loginController");

router.get("/", getLoginPage);

module.exports = router;
