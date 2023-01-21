const router = require("express").Router();
const {
  getLoginPage,
  getSignUpPage,
  postLogin,
} = require("../controller/loginController");

router.get("/", getLoginPage);
router.get("/signup", getSignUpPage);
router.post("/login", postLogin);

module.exports = router;
