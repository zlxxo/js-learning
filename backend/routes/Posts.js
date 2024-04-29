const express = require('express');
const router = express.Router();

const {Posts} = require("../models")

router.get("/", async (req, res) => {
    const allPosts = await Posts.findAll()

    res.json(allPosts)
});

router.post("/", async (req, res) => {
    const post = req.body

    await Posts.create(post); // post is an object with same format as table

    res.json(post)

});

module.exports = router;