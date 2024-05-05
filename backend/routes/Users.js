const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const {Users} = require("../models")

router.post("/", async (req, res) => {
    const {username, password} = req.body
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({            // create a user
            username: username,
            password: hash
        });
        res.json(`User ${username} created`)
    })

});

module.exports = router;