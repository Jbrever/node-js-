const mongoDB = require("mongoose");
const mongoConnection = (url) => {
 
    return mongoDB.connect(url)
  
};

module.exports = {
  mongoConnection,
};
