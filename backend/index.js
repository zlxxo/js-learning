// server
const express = require('express')
const app = express()

// parse to json format in requests
app.use(express.json())

// sequelize datbase
const db = require('./models')

// routers
const postRouter = require('./routes/Posts')
app.use("/posts", postRouter) // route for posts is /post == localhost/post


// create database
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Sever running!')
    })
})