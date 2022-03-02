const todo = require('../models/todoModel')

const createTask = function(req,res){
    try{
    const addTodo = new todo(req.body)
        addTodo.save()
        return res.redirect("/")
    }
    catch(err){
        return res.status(500).send({status:false, message:err.message})
    }
}

const getTask = async function(req,res){
    try{
    const tasks = await todo.find()
        return res.render("index", {todo:tasks})
    }
    catch(err){
        return res.status(500).send({status:false, message:err.message})
    }
}
        
const deleteTask = function(req,res){
    const id = req.params._id
    todo.deleteOne({id})
    
    .then(()=> {
    res.redirect("/")
    })   
    .catch((err)=> console.log(err))
    }

module.exports = {createTask, getTask, deleteTask}
