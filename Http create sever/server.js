const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 8000;

const sever = http.createServer((req,resp)=>{
   
   const log = `${Date.now()} : ${req.url} NEW Request Rec. \n `
   console.log(Date.now())
   fs.appendFile('log.txt', log ,(err , data )=>{
       
      switch(req.url){
            case '/': resp.end('index page')
            break;
            case '/home' : resp.end('home page')
            break;
            case '/about' : resp.end('about pagee')
            break;
            default : resp.end("404 not found")
         }
   })

}).listen(port,(req)=>{
   console.log("sever start at port number -: " + port)
})