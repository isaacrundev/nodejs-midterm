const router = require("express").Router();
const {
  getLoginPage,
  getSignUpPage,
  postLogin,
  getLogoutPage,
} = require("../controller/loginController");

router.get("/", getLoginPage);
router.get("/signup", getSignUpPage);
router.post("/login", postLogin);
router.get("/logout", getLogoutPage);

module.exports = router;
