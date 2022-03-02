const mongoose= require('mongoose')

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
