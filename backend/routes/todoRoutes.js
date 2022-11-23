const express =require("express")

const {createTodo, getTodo} = require("../controllers/todoControllers")
const router = express.Router();

router.post("/", (req,res) => {
    res.send("HI HI HI")
})
router.post("/createTodo", createTodo)
router.get("/getTodo", getTodo)

module.exports = router;