const mongoose = require("mongoose");

// designing the database schema for mongodb
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        maxLength: 60
    },
    task: [{
        type: String
    }]
    //add date
})


module.exports = mongoose.model("Todo", todoSchema)