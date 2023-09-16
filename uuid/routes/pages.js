const express = require("express");
const router = express.Router();
const {
  getSignUpPage,
  postSignUpPage,
  getLoginPage,
  postLoginPage,
  getHomePage
} = require("../controller/pages");

router.route("/signup").get(getSignUpPage).post(postSignUpPage);
router.route("/login").get(getLoginPage).post(postLoginPage);

router.get('/',getHomePage)

module.exports = router;
