const express =require("express")

const {createTodo, getTodo, updateTodo, deleteTodo} = require("../controllers/todoControllers");
const { register, login } = require("../controllers/userController");
const auth = require("../middleware/auth");
const router = express.Router();

/* router.get("/ge", getTodo) */
router.post("/createTodo", createTodo)
router.get("/getTodo",  getTodo)
router.put("/:todoId", updateTodo)
router.delete("/:todoId", deleteTodo)

router.post("/createUser", register)
router.post("/login", login)

module.exports = router;