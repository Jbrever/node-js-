first we install "uuid" from npm  

require uuid in controller/pages folder and made "sessionId" named variable to store sessionId with user object

then we create "service/auth.js" named folder to store sessionId 
line no-: 1 , "const sessionIdToUserMap = new Map();" it's basically a hashMap 

then we create "middleWare/auth.js" named folder 

then install "cookie-parser" npm package