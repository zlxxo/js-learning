import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';

function Post() {
    let {id} = useParams();

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState("")

    const addNewComment = () => {
        let data = {
            commentBody: newComment,
            PostId: id
        }

        if(newComment == "" || newComment == null) {
            return;
        }
        
        axios.post(`http://localhost:3001/comments`, data, {
            headers: {
                accessToken: sessionStorage.getItem("accessToken")
            },
        }).then((response) => {
            
            if(response.data.error) {
                alert(response.data.error)
                return;
            }

            console.log("Comment added!")
            setComments([...comments, response.data])
            setNewComment("")
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/id/${id}`).then((response) => {
            if(response != null) {
                setPost(response.data)
            }
        })

        axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
            if(response != null) {
                setComments(response.data)
            }
        })
    }, [])

  return (
    <div>
        <div class="contentPost">
            <div class="left">
                <div class="postCom">
                    <div class="header">
                        <p clas="user"> @{post.user} </p>
                    </div>
                    <div class="body">
                        <p clas="title"> {post.title} </p>
                        <p class="text"> {post.text} </p>
                </div>
            </div>
            </div>
            <div class="right">
                <div class="commentsTitle">Comments</div>
                <div class="newComment">
                    <input class="commentInput" type='text' placeholder='Add a comment' value={newComment} // on reload empty input
                           onChange={(event) => {setNewComment(event.target.value)}}/>
                    <button class="addComment" onClick={addNewComment}>+</button>
                </div>
                {comments.map((value, key) => {
                    return <div class="comment">
                                <span class="username">@{value.username}</span> {value.commentBody}
                            </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Post
