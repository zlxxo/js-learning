import React from 'react'
import {useParams} from 'react-router-dom'

function Post() {
    let {id} = useParams();
  return (
    <div>
        <div class="content">
            <h1>Post</h1>
            <p>{id}</p>
        </div>
    </div>
  )
}

export default Post
