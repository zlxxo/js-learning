import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'

function App() {

  const [postsList, setPostsList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setPostsList(response.data)
    })
  }, [])

  return (
    <div className="App"> {
      postsList.map((value, key) => {
        return <div class="post">
          <div class="title">
            <p clas="user"> {value.user} </p>
            <p clas="post-title"> {value.title} </p>
          </div>
          <div class="text">
            <p class="post-text"> {value.text} </p>
          </div>
        </div>
      })
    }
    </div>
  );
}

export default App;
