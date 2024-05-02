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

// router.post("/", async (req, res) => {
//     const post = req.body

//     await Posts.create(post); // post is an object with same format as table

//     res.json(post)

// });

module.exports = router;