const express = require("express");
const app = express();
const port = process.env.PORT || 8002;
const { mongoConnection } = require("./connection/connection");
const routesUsers = require('./routes/users')
const routesPages = require('./routes/pages')

app.use(express.urlencoded({extended:false}))
app.set('view engine' , 'ejs')

mongoConnection("mongodb://localhost:27017/AuthProject") .then(() => {
    console.log("MongoDB Connected at http://localhost:8002/login)");
}).catch((err) => console.log(err));

app.use('/users',routesUsers)
app.use('/',routesPages)

app.listen(port, () => {
  console.log("server listing at Port number-: " + port);
});

