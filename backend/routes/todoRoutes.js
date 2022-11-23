const express =require("express")

const {createTodo, getTodo} = require("../controllers/todoControllers")
const router = express.Router();

router.get("/", getTodo)
router.post("/createTodo", createTodo)/* 
router.get("/", getTodo) */

module.exports = router;