const Todo = require("../models/todoModel");
const usersModel = require("../models/usersModel");

exports.createTodo = async (req, res) => {
  try {
    const { title, task } = req.body;
    const todo = await Todo.create({ title, task });
    /* await todo.save() */
    res.status(201).json({
      success: true,
      message: "Todo created successfully",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("server erroR");
  }
};
exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.find();
    return res.json(todo);
  } catch (error) {
    console.log(error);
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body );
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
      todo
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
