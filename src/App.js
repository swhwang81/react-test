import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import DegreeProject from './pages/degree-project';
import Designer from './pages/designer';
import ImageDetail from './pages/imagedetail';
import Footer from './components/Footer';
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
            <Link to="/project">PROJECT</Link>
            <Link to="/designer">DESIGNER</Link>
          </div>
        </nav>
                        <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/project" element={<Project />} />
                  <Route path="/degree-project" element={<DegreeProject />} />
                  <Route path="/designer" element={<Designer />} />
                  <Route path="/image/:id" element={<ImageDetail />} />
                </Routes>
                <Footer />
              </div>
            </Router>
  );
}

export default App;
