// server
const express = require('express')
const app = express()
const cors = require('cors')

// parse to json format in requests
app.use(express.json())
app.use(cors()) // to make requests from react

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