frontend = index.html or backend = server.js

first we need to install npm package "socket.io" at backend part 
socket.io have to install at both of sides

"socket.io" in last "io" word is stand for 'input/output'

it use "http" module with "express" to create server 

"const {Server} = require('socket.io')" required socket.io and in {} "Server" is a default function , it should be start with capital "S" -: "Server"

"const io = new Server(server)" this line handle sockets

after "io.on('connection',(socket)={})" we need to install "socket.io" at frontend part     

paste a prebuild script " <script src="/socket.io/socket.io.js"></script> " att frontend part 

then , at frontend part we need to declare it "const socket = io();  //important" in new script 

this line "socket.emit('user message: ', inpValue)" at frontend ,  "emit" mean "send message (in second  parameter of emit() ) to server" 

