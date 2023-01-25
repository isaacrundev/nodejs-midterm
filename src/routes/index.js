const router = require("express").Router();
const {
  getLoginPage,
  getSignUpPage,
  postLogin,
  getLogoutPage,
  postSignUp,
} = require("../controller/loginController");

router.get("/", getLoginPage);
router.get("/signup", getSignUpPage);
router.get("/logout", getLogoutPage);
router.post("/login", postLogin);
router.post("/submit", postSignUp);

module.exports = router;
