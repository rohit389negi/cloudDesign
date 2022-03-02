const todo = require('../models/todoModel')

const createTask = (req,res)=>{

const addTodo = new todo(req.body)
    addTodo.save()
    
    .then(()=> {
        res.redirect("/")
        })
    
    .catch((err)=> console.log(err))
}
    
const getTask = async(req,res)=>{

const allTodo = await todo.find()
    res.render("index", {todo:allTodo})
}

const deleteTask = (req,res)=>{

const {_id} = req.params
    
    todo.deleteOne({_id})
    
    .then(()=> {
        res.redirect("/")
        })
    
    .catch((err)=> console.log(err))
}

module.exports = {createTask, getTask, deleteTask}