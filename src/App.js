import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/gallery';
import Designer from './pages/designer';
import ImageDetail from './pages/imagedetail';
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
            <Link to="/designer">DESIGNER</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/designer" element={<Designer />} />
          <Route path="/image/:id" element={<ImageDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
