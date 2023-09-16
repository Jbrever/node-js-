const express = require("express");
const router = express.Router();
const {getSignUpPage,postSignUpPage , getLoginPage , postLoginPage} = require('../controller/pages')

router.route("/signup").get(getSignUpPage).post(postSignUpPage);
router.route("/login").get(getLoginPage).post(postLoginPage)

module.exports = router;
