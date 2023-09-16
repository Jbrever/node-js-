first install npm package "jsonwebtoken"

start to work in ./service/auth.js

now we create token for users in ./service/auth.js setUserJwt funtion

in ./service/auth.js "jwt.sign()" is used to set token and "jwt.verify()" is used to get token 

"jwt.sign()" first parameter used for payload and second is for "secret key" third for "expiry time" , payload is basically a detail of user that'll used to make token ( based on user detail)  

