const express = require("express");
const app = express();
const port = process.env.PORT || 8002;
const { mongoConnection } = require("./connection/connection");
const routesUsers = require('./routes/users')
const routesPages = require('./routes/pages')
const cookieParser= require('cookie-parser')
const {restrictToLoggedInUserOnly} = require('./middleware/auth')  

app.use(express.urlencoded({extended:false}))
app.set('view engine' , 'ejs')
app.use(cookieParser())

mongoConnection("mongodb://localhost:27017/AuthProject") .then(() => {
    console.log("MongoDB Connected at http://localhost:8002/login)");
}).catch((err) => console.log(err));

app.use('/users',restrictToLoggedInUserOnly,routesUsers)  //second argument is middleware call to /middleware/auth.js
app.use('/',routesPages)


app.listen(port, () => {
  console.log("server listing at Port number-: " + port);
});

