import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';

function Post() {
    let {id} = useParams();

    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/id/${id}`).then((response) => {
            if(response != null) {
                setPost(response.data)
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
                Comments
            </div>
        </div>
    </div>
  )
}

export default Post
