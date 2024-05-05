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
const commentRouter = require('./routes/Comments')
app.use("/comments", commentRouter) // route for comments is /comments
const userRouter = require('./routes/Users')
app.use("/users", userRouter) // route for users (log in/ sign up)


// create database
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Sever running!')
    })
})