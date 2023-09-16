const mongodb = require("mongoose");

async function connectMongoDb(url){
  return  mongodb.connect(url)
  
}

module.exports = {
    connectMongoDb
}