const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use((req,resp,next)=>{
    console.log("middlewar has been started")
    req.MynameIsJbr = "Hello from the Jbr"
    next()
})

app.use((req,resp,next)=>{
    console.log(" yes!! Middleware 2 called " + req.MynameIsJbr); 
    next()
})

app.listen(port,()=>console.log('server started at port -: ' + port))
