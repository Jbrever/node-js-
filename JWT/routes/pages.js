const express = require("express");
const routes = express.Router();
const { getSignupPage, getLoginPage,postSingupPage,postLoginPage ,getHomePage} = require("../controller/pages");
const { userRestrict } = require('../service/auth');

routes.route("/signup").get(getSignupPage).post(postSingupPage);
routes.route("/login").get(getLoginPage).post(postLoginPage);
routes.get('/',getHomePage)

module.exports = routes;
