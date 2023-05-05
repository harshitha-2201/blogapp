
// import { BrowserRouter  , Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home'

const App = ()  => (
 
    <div className="Appcontainer">
    <Router>
      <Routes>
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

    </div>
  );


export default App;
