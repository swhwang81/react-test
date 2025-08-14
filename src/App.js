import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import DegreeProject from './pages/degree-project';
import Designer from './pages/designer';
import DesignerDetail from './pages/designer-detail';
import ImageDetail from './pages/imagedetail';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <nav>
          <div className="nav-left">
            <Link to="/" className="nav-item">Home</Link>
          </div>
          <div className="nav-right">
            <Link to="/about" onClick={closeMenu}>ABOUT</Link>
            <Link to="/project" onClick={closeMenu}>PROJECT</Link>
            <Link to="/designer" onClick={closeMenu}>DESIGNER</Link>
          </div>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          </div>
        </nav>
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/about" onClick={closeMenu}>ABOUT</Link>
          <Link to="/project" onClick={closeMenu}>PROJECT</Link>
          <Link to="/designer" onClick={closeMenu}>DESIGNER</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/degree-project" element={<DegreeProject />} />
          <Route path="/designer" element={<Designer />} />
          <Route path="/designer/:id" element={<DesignerDetail />} />
          <Route path="/image/:id" element={<ImageDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
