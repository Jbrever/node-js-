const {getUserJwt} = require('../service/auth')
const userRestrict = async (req,resp,next)=>{
    // console.log(req)                                
    const userCookie = await req.cookies.token;   // 1. used middleware "app.use(cookie)" in ./server.js
                                                  // 2. install node package "cookie-parser" and required in  ./server.js   
                                                  // 3. "req.cookies.token" last object key "token" is a name that specified in ../controlers/pages.js in first parameter "resp.cookie("token",token)"
    if(!userCookie) resp.redirect('/login')
    const getToken = getUserJwt(userCookie)
    
    next();
}

module.exports ={
    userRestrict
}