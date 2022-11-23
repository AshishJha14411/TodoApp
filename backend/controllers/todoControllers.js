const Todo = require("../models/todoModel")

exports.createTodo = async (req,res) => {
    try {
    const {title, list} = req.body;
        const todo = await Todo.create({title, list});
        await todo.save()
        return res.json(todo)
    } catch (error) {
        console.log(error)
        res.status(500).send("server erroR")
    }
}