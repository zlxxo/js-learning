import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

export default function Home() {

    const [postsList, setPostsList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
          
          const posts = response.data;
          // sort by creation date
          posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          //console.log(posts);
          
          setPostsList(posts)

        })
      }, [])

  return (
    <div>

      <div class="content">
        <button class="addButton"><Link to="/create" class="addLink">+</Link></button>
        {
        postsList.map((value, key) => {
          return <div class="post">
            <div class="header">
              <p clas="user"> @{value.user} </p>
            </div>
            <div class="body">
              <p clas="title"> {value.title} </p>
              <p class="text"> {value.text} </p>
            </div>
          </div>
        })
        }
      </div>
    </div>
  )
}
