
const user = require('../model/users')

const getSignUpPage = (req,resp)=>{
  return resp.render('signup',{
    title:'signup'
})
} 

const postSignUpPage = (req,resp)=>{
    console.log(req.body)
    const output = user.create({
        fistName: req.body.fname,
        city: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        address1: req.body.address1,
        state: req.body.state,
        zip: req.body.zip,
      }); 

     return resp.json({status:'user added'})
} 

const getLoginPage =(req,resp)=>{
    return resp.render('login',{
      title:'login'
  })
}

const postLoginPage= async (req,resp)=>{
   const { email , password} = req.body
   const result = await user.findOne({email,password})
   console.log(req.body)
 if(!result) return resp.render('signup'),{
  error : "invalid user"
 }
 return resp.render('home')

}
  

module.exports = {
    getSignUpPage,
    postSignUpPage,
    getLoginPage,
    postLoginPage
  }