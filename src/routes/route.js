const express = require('express')
const router = express.Router()

const todoController = require('../controllers/todoController')

router.post('/add/todo', todoController.createTask)
router.get("/", todoController.getTask) 
router.get("/delete/todo/:_id", todoController.deleteTask)
 
module.exports = router
