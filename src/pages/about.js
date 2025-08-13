import React from 'react';
import './about.css';

function About() {
  return (
    <main className="about-main">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">This is the About page of our website.</p>
      <p className="about-description">We are a creative team dedicated to building amazing web experiences.</p>
    
      <h1 className="about-team-title">Our Team</h1>
      <div className="about-team-list">
        <div className="about-team-item">
          <h3 className="about-team-name">Developer 1</h3>
          <p className="about-team-description">Hello World! Developer 1, This is a description of Developer 1</p>
        </div>
        <div className="about-team-item">
          <h3 className="about-team-name">Developer 2</h3>
          <p className="about-team-description">Hello World! Developer 2, This is a description of Developer 2</p>
        </div>
        <div className="about-team-item">
          <h3 className="about-team-name">Developer 3</h3>
          <p className="about-team-description">Hello World! Developer 3, This is a description of Developer 3</p>
        </div>
      </div>
    </main>
  );
}

export default About;
