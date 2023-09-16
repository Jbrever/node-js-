const express = require("express");
const route = express.Router();
const model = require("../models/user");
const { 
        pagesGet, 
        pagesPost
      } = require("../controller/index");

      route
  .route("/signup")
  .get(pagesGet)
  .post(pagesPost);

module.exports = route;
