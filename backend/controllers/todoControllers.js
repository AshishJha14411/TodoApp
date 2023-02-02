const Todo = require("../models/todoModel");
const User = require("../models/usersModel");

exports.createTodo = async (req, res) => {
  const taskSpliter = (taskString) => {
    return (taskString.split("- "))
  }
  try {
    const user = req.user
    const {title, task} = req.body
    const todo = await Todo.create({
      title,
      task: taskSpliter(task),
      user: user.user_id
    })
    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      todo,
    });
    //add fields for user id recognication to bind the stuff
    ;
   
  } 
  catch (error) {
    console.log(error);
    res.status(500).send("server erroR");
  } 
}
exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.find({user:req.user.user_id});
    return res.json(todo);
  } catch (error) {
    console.log(error);
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "Todo updated Sucessfully",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await Todo.findByIdAndDelete(todoId);
    res.status(200).json({
      success: true,
      message: "Todo Deleted Successfully",
      delete: todoId
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
