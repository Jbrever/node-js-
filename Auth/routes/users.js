const express = require("express");
const router = express.Router();
const {
  getUserById,
  patchUserById,
  deleteUserById,
  getAllUser
} = require("../controller/users");

router.get("/",getAllUser);

router
  .route("/:id")
  .get(getUserById)
  .patch(patchUserById)
  .delete(deleteUserById);

module.exports = router;
