const mongoDB = require('mongoose')

const connection =async(url) => {
   return await mongoDB.connect(url)
}


module.exports = {
    connection
}