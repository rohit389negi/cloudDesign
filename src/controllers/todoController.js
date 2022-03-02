const todo = require('../models/todoModel')

//this is the handler code for adding the task to the database
const createTask = (req,res)=>{

const addTodo = new todo(req.body)
    addTodo.save()
    
    .then(()=> {
        res.redirect("/")
        })
    
    .catch((err)=> console.log(err))
}

//this is the handler code for getting the task list from the database
const getTask = async(req,res)=>{

const allTodo = await todo.find()
    res.render("index", {todo:allTodo})
}

//this is the handler for deleting the task from the database
const deleteTask = (req,res)=>{

const {_id} = req.params
    
    todo.deleteOne({_id})
    
    .then(()=> {
        res.redirect("/")
        })
    
    .catch((err)=> console.log(err))
}

//todoController file exported
module.exports = {createTask, getTask, deleteTask}