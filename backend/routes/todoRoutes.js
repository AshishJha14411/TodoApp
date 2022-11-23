const express =require("express")

const {createTodo} = require("../controllers/todoControllers")
const router = express.Router();

router.post("/", (req,res) => {
    res.send("HI HI HI")
})
router.post("/createTodo", createTodo)


module.exports = router;