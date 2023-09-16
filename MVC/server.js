const express = require('express')
const app = express();
const {connectMongoDb} = require('./connection/connection');
const userRouter = require('./routes/user')
const pagesRouter = require('./routes/pages')

connectMongoDb("mongodb://localhost:27017/projectDB").then(()=>console.log("mongoDB Connected"))

app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))

app.use('/',pagesRouter)
app.use('/user',userRouter)

app.listen(9000,()=>console.log('sever connected'))


