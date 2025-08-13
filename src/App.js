import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
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
            <Link to="/project">PROJECT</Link>
            <Link to="/designer">DESIGNER</Link>
          </div>
        </nav>
                        <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/project" element={<Project />} />
                  <Route path="/designer" element={<Designer />} />
                  <Route path="/image/:id" element={<ImageDetail />} />
                </Routes>
                <footer className="footer">
                  <div className="footer-content">
                    <div className="footer-column">
                      <h3>인제대 멀티미디어 학부</h3>
                      <p>50834 경상남도 김해시 인재로 197</p>
                      <p>인제대학교 신어관(C동) 504 호</p>
                      <p>mm.inje.ac.kr</p>
                    </div>
                    <div className="footer-column">
                      <h3>Inje University Multimedia Department</h3>
                      <p>504, Sin-eo Hall (Building C), Inje University</p>
                      <p>197 Inje-ro, Gimhae-si, Gyeongsangnam-do 50834</p>
                      <p>mm.inje.ac.kr</p>
                    </div>
                  </div>
                </footer>
              </div>
            </Router>
  );
}

export default App;
