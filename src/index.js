const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));
app.set("view engine", "ejs")

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://users-open-to-all:hiPassword123@cluster0.uh35t.mongodb.net/rohitnegi?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))

app.use(require("./routes/route"))

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});