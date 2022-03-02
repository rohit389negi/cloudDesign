const express = require('express')
const router = express.Router()

//todoController file required
const todoController = require('../controllers/todoController')

//adding task to database endpoint with path from controller
router.post("/add/todo", todoController.createTask)

//getting task from database to browser-API
router.get("/", todoController.getTask) 

//endpoint for deleting the task from databse.
router.get("/delete/todo/:_id", todoController.deleteTask)

module.exports = router