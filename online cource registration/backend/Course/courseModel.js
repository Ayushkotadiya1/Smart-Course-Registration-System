const mongoose =  require('mongoose')
const validator = require("validator")

const courseSchema = mongoose.Schema({
    courseName:{
        type: String
    },
    image:{
        type: String
    },
    subArea:{
        type: String
    },
    desc:{
        type: String
    },
    profName:{
        type: String
    },
    prerequisites:{
        type: String
    },
    timeSlot:{
        type: Number
    },
    capacity:{
        type: Number
    },
    cgpa:{
        type: Number
    },
})

module.exports = mongoose.model('course',courseSchema)