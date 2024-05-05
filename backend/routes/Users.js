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

router.post("/login", async (req, res) => {
    const {username, password} = req.body
    const user = await Users.findOne({
        where: {username: username}
    })

    if(!user) {
        res.json("Wrong username or password")
        return;
    }

    bcrypt.compare(password, user.password).then((same) => {
        if(!same) {
            res.json("Wrong username or password")
            return;
        }

        res.json("Welcome!")
    })
})

module.exports = router;