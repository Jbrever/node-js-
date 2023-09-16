const routes = require('express').Router();
const {getAllUsers , getOneUser , patchOneUser , deleteOneUser} = require('../controller/users')

routes.route("/").get(getAllUsers)

routes.route('/:fname').get(getOneUser).patch(patchOneUser).delete(deleteOneUser)

module.exports=routes

