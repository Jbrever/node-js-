const express = require("express");
const route = express.Router();
const model = require("../models/user");
const {
  userGetAllhandler,
  userGetByIdHandler,
  userDeleteById,
  userPatchById
} = require("../controller/index");

route.get("/", userGetAllhandler);

route
  .route("/:fname")
  .get(userGetByIdHandler)
  .delete(userDeleteById)
  .patch(userPatchById);

module.exports = route;
