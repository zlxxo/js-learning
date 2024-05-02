const express = require('express');
const router = express.Router();

const {Comments} = require("../models")

router.get("/:id", async (req, res) => {
    const postId = req.params.id;

    const postComments = await Comments.findAll({
        where: {
            PostId: postId
        }
    })

    res.json(postComments)
});

router.post("/", async (req, res) => {
    const comment = req.body

    await Comments.create(comment); // post is an object with same format as table

    res.json(comment)

});

module.exports = router;