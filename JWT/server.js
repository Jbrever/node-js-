const express = require('express')
const app = express();
const {connection} = require('./connection/connection')
const port = process.env.PORT|| 7000
const pageRouters = require('./routes/pages')
const cookieParser= require('cookie-parser')
const {userRestrict} = require('./middleware/getlogRestrict')
const UserRouter = require('./routes/user')

connection("mongodb://localhost:27017/JWT-Project").then(console.log("mongoDB Connected :) "))

app.set('view engine',"ejs")
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/',pageRouters)
app.use('/users',userRestrict,UserRouter)

app.listen(port,()=>console.log("server listening at port no-: "+port))
 