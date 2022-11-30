const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// designing the database schema for mongodb

//#adding user to todo model
const todoSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      
    },
    title: {
      type: String,
      require: true,
      maxLength: 60,
    },
    task: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todoSchema);
