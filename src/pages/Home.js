import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <>
      <nav>
        <div className="nav-left">
          <Link to="/" className="nav-item">UNFOLD THE FLOW</Link>
        </div>
        <div className="nav-right">
          <Link to="/about">ABOUT</Link>
          <Link to="/project">PROJECT</Link>
          <Link to="/designer">DESIGNER</Link>
        </div>
      </nav>
      <main className="home-main">
        <div className="intro-text-left">
          <h1>INJE University<br/>
          Division of Multimedia Design<br/>
          Digital Contents<br/>
          2025 Graduation Exhibition</h1>
          <h2>여정의 전개</h2>
        </div>
        <div className="intro-text-center">
          <h2>This is Test!</h2>
        </div>
      </main>
    </>
  );
}

export default Home;
