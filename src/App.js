import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Gallery from './pages/gallery';
import ImageDetail from './pages/ImageDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="nav-left">
            <Link to="/" className="nav-item">Home</Link>
          </div>
          <div className="nav-right">
            <Link to="/about">ABOUT</Link>
            <Link to="/gallery">GALLERY</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/image/:id" element={<ImageDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
