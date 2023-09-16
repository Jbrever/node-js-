const model = require("../model/model");
const {setUserJwt} = require('../service/auth');
const getSignupPage = async (req, resp) => {
  return await resp.render("signup");
};
const getLoginPage = async (req, resp) => {
  return await resp.render("login", {
    title: "login page"
  });
};

const postSingupPage = async (req, resp) => {
  const {
    fname,   
    lname,
    email,
    password,
    address1,
    address2,
    city,
    state,
    zip,
  } = req.body;  //in form , "name="_" " attribute value should be match with schema's key name so then we can use this way 
  // console.log(req.body)
  const data = model.create({
    fname,
    lname,
    email,
    password,
    address1,
    address2,
    city,
    state,
    zip,
  });
  return resp.status(201).json({
    status: "Data Added!",
  });
};


const postLoginPage = async (req,resp)=>{
    const {email , password} = req.body
    const userData = await model.findOne({email,password})
    // console.log(userData)
    if(userData == null) resp.redirect('/signup')
    const token = setUserJwt(userData)
    resp.cookie("token",token)      // first parameter used to declare name of token then this declared name used in ../middleware/getlogRestrict.js
    resp.render('home')

}

const getHomePage =(req,resp)=>{
   return resp.render('home')
}

module.exports = {
  getSignupPage,
  getLoginPage,
  postSingupPage,
  postLoginPage,
  getHomePage
};

