const user = require('../model/users')

const getUserById = async (req,resp)=>{
    const result = await user.findById(req.params.id)
    return resp.json(result)
}

const patchUserById = async (req,resp)=>{
    const result = await user.findByIdAndUpdate(req.params.id)
    return resp.json({
        status:" user Updated "
    })
}
const deleteUserById = async (req,resp)=>{
    const result = await user.findByIdAndDelete(req.params.id)
    return resp.json({
        status:" user Deleted "
    })
}

const getAllUser = async (req,resp)=>{
        const result = await user.find({})
        return resp.json(result)
}

module.exports = {
    getUserById,
    patchUserById,
    deleteUserById,
    getAllUser
}