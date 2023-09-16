const JWT = require('jsonwebtoken')
const secretKey = "ItShoudBeSafe" 

// const setUserJwt= (userData)=>{
//     // console.log(userData)
//     return JWT.sign({         
//         _id:userData._id,        //payload   
//         email:userData.email
//     },secretKey)
   
// }

const setUserJwt = (userData) => {
    if (userData && userData._id) {
        return JWT.sign({         
            _id: userData._id, // payload
            email: userData.email
        }, secretKey);
    } else {
        // Handle the case where userData is null or missing _id property.
        // You can throw an error, return null, or handle it in your desired way.
        // For example:
        throw new Error('userData is null or missing _id property');
    }
}


const getUserJwt=(token)=>{    //called by /service/auth.js

   try {
    return JWT.verify(token , secretKey);    
   } catch (error) {
    return null
   }
}

module.exports = {
    setUserJwt,
    getUserJwt
}
