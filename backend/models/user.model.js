//modelo users

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role:{
        type: String,
        default:'user'
    }
   
},{timestamps: true,
    versionKey:false})

module.exports = mongoose.model("User", userSchema);