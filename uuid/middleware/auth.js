const { getUserUuid } = require("../service/auth");

const restrictToLoggedInUserOnly= async(req,resp,next)=>{  //call by server.js

   const userUid = await req.cookies?.cookieName;      // 1. used middleware "app.use(cookie)" in ./server.js
                                                       // 2. install node package "cookie-parser" and required in  ./server.js
                                                       // 3. "req.cookies.cookieName" last object key "cookieName" is a name that specified in ../controlers/pages.js in first parameter "resp.cookie("cookieName",sessionId)"
                                                       
                                                     
   console.log(req) 
                                       
   if(!userUid) return resp.redirect('/login')
   const user = getUserUuid(userUid);          //calling to /service/auth.js

   if(!user) return resp.redirect('/signup')
   next()
}

module.exports ={
    restrictToLoggedInUserOnly
}