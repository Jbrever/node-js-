const mongodb = require('mongoose')

const schema = new mongodb.Schema({
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

const model = mongodb.model("information",schema)

module.exports = model ;
