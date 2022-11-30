const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        minLength: 10,

    },
    password: {
        type: String,
        requrie: true,
    },
    firstname:{
        type: String,
        requrie: true,
        minLength: 4,
    },
    lastname:{
        type: String
    },
    todos: {
        type:[{
            type: mongoose.Schema.Types.ObjectId,
            required:[true, "Id is required to store data"]
        }]
    }
})


module.exports = mongoose.model("User", userSchema)