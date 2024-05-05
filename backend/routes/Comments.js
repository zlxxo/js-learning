const express = require('express');
const router = express.Router();

const {Comments} = require("../models")
const {validateToken} = require("../middlewares/AuthMiddleware")

router.get("/:id", async (req, res) => {
    const postId = req.params.id;

    const postComments = await Comments.findAll({
        where: {
            PostId: postId
        }
    })

    res.json(postComments)
});

router.post("/", validateToken, async (req, res) => { // after recieving req check if the user is logged in
    const comment = req.body
    comment.username = req.user.username

    await Comments.create(comment); // post is an object with same format as table

    res.json(comment)

});

module.exports = router;