const express =require("express")

const {createTodo, getTodo} = require("../controllers/todoControllers");
const { register, login } = require("../controllers/userController");
const auth = require("../middleware/auth");
const router = express.Router();

/* router.get("/ge", getTodo) */
router.post("/createTodo", auth, createTodo)
router.get("/getTodo", auth, getTodo)
router.post("/createUser", register)
router.post("/login", login)

module.exports = router;