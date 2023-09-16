const model = require('../model/model')

async function getAllUsers(req,resp){
    // console.log(req)
    const output = await model.find({})
    console.log(output)
    return resp.json(output)
}


async function getOneUser(req,resp){
    const output = await model.findById(req.params.fname)
    if(!output) return null
    return resp.json(output)
}



async function patchOneUser(req,resp){
    const output = await model.findByIdAndUpdate(req.params.fname)
    return resp.json({
        status:"Updated"
    })
}


async function deleteOneUser(req,resp){
    const output = await model.findByIdAndDelete(req.params.fname)
    return resp.json({
        status:"User Deleted"
    })
}









module.exports = {getAllUsers,getOneUser,patchOneUser,deleteOneUser}
