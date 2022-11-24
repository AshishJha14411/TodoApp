const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        minLength: 10,
        is
    },
    password: {
        type: String,
        requrie: true,
    },
    name:{
        type: String,
        minLength: 4,
    }
})


module.exports = mongoose.model("User", userSchema)