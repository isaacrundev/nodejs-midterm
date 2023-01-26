const router = require("express").Router();
const { checkSession } = require("../util/checkSession");
const {
  getLoginPage,
  getSignUpPage,
  postLogin,
  getLogoutPage,
  postSignUp,
} = require("../controller/loginController");

router.get("/", getLoginPage);
router.get("/signup", checkSession, getSignUpPage);
router.get("/logout", getLogoutPage);
router.post("/login", postLogin);
router.post("/submit", checkSession, postSignUp);

module.exports = router;
