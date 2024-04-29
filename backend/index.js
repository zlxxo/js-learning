// server
const express = require('express')
const app = express()

// sequelize datbase
const db = require('./models')

// routers
const postRouter = require('./routes/Posts')
app.use("/post", postRouter) // route for posts is /post == localhost/post


// create database
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Sever running!')
    })
})