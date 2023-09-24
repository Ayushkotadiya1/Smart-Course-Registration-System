const mongoose =  require('mongoose')
const validator = require("validator")

const userSchema = mongoose.Schema({
    fname:{
        type : String,
        // required : true,
        trim : true,
    },
    lname:{
        type:String,
        trim : true,
        // required : true,
    },
    username:{
        type: String,
        unique: true,
        required : true,
        trim: true
    },
    email:{
        type : String,
        required : true,
        unique : true,
        trim: true
    },
    password: {
        type : String,
        required : true,
        trim: true
    },
    contact:{
        type : Number,
        unique : true,
        trim: true
    },
    gender:{
        type : String,
        trim: true,
        enum:['male','female']
    },
    dob:{
        type: Date,
    },
    streetAddr:{
        type:String
    },
    city:{
        type : String,
    },
    state:{
        type : String,
    },
    country:{
        type : String,
    },
    image:{
        type:String
    },
    studentId:{
        type : String,
        // required : true
    },
    instName:{
        type : String,
    },
    cgpa:{
        type: Number,
    },
    deptName:{
        type: String,
    },
    link:{
        type: String,
    }
})

module.exports = mongoose.model('user',userSchema)