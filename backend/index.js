// server
const express = require('express')
const app = express()

// sequelize datbase
const db = require('./models')


// create database
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Sever running!')
    })
})