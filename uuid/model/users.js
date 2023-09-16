const mongo = require('mongoose');

const schema = new mongo.Schema({
    fistName:{
        type:String,
        required : true
    } ,
    lastName:{
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

const user = mongo.model('userData',schema)

module.exports = user;