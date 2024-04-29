import './App.css';
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost';

function App() {

  return (
    <div className="App">
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
