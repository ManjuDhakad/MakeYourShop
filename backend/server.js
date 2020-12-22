const express = require('express');
const cors = require('cors');
const bodyParser= require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 9000
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.listen(PORT , ()=> console.log(`the server has started on port : ${PORT}`))

mongoose.connect('mongodb://localhost:27017/myapp', {useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
        if(err) throw err
        console.log("Mongodb connection is stablished")
    })

    app.use('/users' , require('./routes/user'))