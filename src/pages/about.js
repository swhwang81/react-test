import React from 'react';
import './about.css';

function About() {
  return (
    <main className="about-main">
      <section>
      <h1 className="about-title">여정의 전개</h1>
      <h1 className="about-title-en">UNFORD THE FLOW</h1>
      <p className="about-description">This is the About page of our website.</p>
      <p className="about-description">We are a creative team dedicated to building amazing web experiences.</p>
      </section>

      <section>
      <h1 className="about-title">비주얼 아이덴티티</h1>
      <h1 className="about-title-en">Visual Identity</h1>
      <p className="about-description">This is the About page of our website.</p>
      <p className="about-description">We are a creative team dedicated to building amazing web experiences.</p>
      </section>

      <section>
      <h1 className="about-title">디지털콘텐츠 전공</h1>
      <h1 className="about-title-en">Digital Contents Major</h1>
      <p className="about-description">This is the About page of our website.</p>
      <p className="about-description">We are a creative team dedicated to building amazing web experiences.</p>
      </section>

      <section>
      <h1 className="about-title">졸업준비 위원회</h1>
      <h1 className="about-title-en">Preparatory Committee</h1>
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
      </section>
    </main>
  );
}

export default About;
