const mongoDB = require('mongoose');

const schema = new mongoDB.Schema({
    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    address1:{
        type:String,
        required:true,
    },
    address2:{
        type:String,
        required:false
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true,
    },
    zip:{
        type:String,
        required:true,
    }
},{timestamps:true})

const model = mongoDB.model('JWTusers',schema)

module.exports = model;