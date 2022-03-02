const mongoose= require('mongoose')

//todoModel schema 
const todoSchema = new mongoose.Schema({

    task : {
        type : String,
    },
    description : {
        type : String,
    },
    status : {
        type : String,
        enum : ['Open', 'In-Progress', 'Completed'],
    }
}, {timestamps:true})

module.exports = mongoose.model('to-do', todoSchema)
