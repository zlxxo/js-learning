import './App.css';
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';

function App() {

  return (
    <div className="App">

<div class="pageHeader">
  <div class="pageTitle">Notes</div>
  <div class="menu">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/create">Create a Post</a></li>
      <li><a href="/login">Log In</a></li>
      <li><a href="/signup">Sign Up</a></li>
    </ul>
  </div>
</div>
      <Router>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;