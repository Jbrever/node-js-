const http = require('http')
const express = require('express')
const app = express();
const {Server} = require('socket.io')  //required socket.io 
const port = process.env.PORT || 9000;
const server = http.createServer(app)
const path = require('path');

app.use(express.static('/public'))

//socket.io
const io = new Server(server)
io.on('connection',(socket)=>{
   socket.on("user-message",(message)=>{      //it first parameter should be match with frontend "socket.emit('user-message: ', inpValue)" function's first parameter
   io.emit('message',message)
   })
})

app.get('/',(req,resp)=>{
    resp.sendFile(path.resolve('./public/index.html'))
})

server.listen(port,()=>{
   console.log("server connected at port number -: " + port);
})
