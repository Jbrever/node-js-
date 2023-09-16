const model = require('../models/user')

const userGetAllhandler = async (req,resp) =>{
    const output = await model.find({})
    if(!output) return resp.json({status:"not found"})
    return resp.json(output)
}

const userGetByIdHandler = async (req,resp)=>{
    const output = await model.findById(req.params.fname)
    if(!output) return resp.status(404).json({status:"not found"})
    return resp.json(output)
}

const userDeleteById =async (req,resp)=>{
    await model.findByIdAndDelete(req.params.fname)
    return resp.json({status:'deleted'})
}

const userPatchById =async (req,resp)=>{
    await model.findByIdAndUpdate(req.params.fname, { firstName: "hooooooooo" });
    return resp.json({ status: "updated" });
}

const pagesGet = async (req,resp)=>{
     await resp.render("Form")
}

const pagesPost = async (req,resp)=>{
    console.log(req.body);
    const output = model.create({
      fistName: req.body.fname,
      city: req.body.lname,
      email: req.body.email,
      password: req.body.password,
      address1: req.body.address,
      state: req.body.state,
      zip: req.body.zip,
    });

    return resp.send("created");
}



module.exports = {
    userGetAllhandler,
    userGetByIdHandler,
    userDeleteById,
    userPatchById,
    pagesGet,
    pagesPost
}