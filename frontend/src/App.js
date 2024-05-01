import './App.css';
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost';

function App() {

  return (
    <div className="App">

<div class="pageHeader">
  <div class="pageTitle">Notes</div>
  <div class="menu">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/create">Create Post</a></li>
    </ul>
  </div>
</div>
      <Router>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;