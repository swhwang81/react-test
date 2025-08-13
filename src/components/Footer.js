import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>인제대 멀티미디어 학부</h3>
          <p>50834 경상남도 김해시 인재로 197 인제대학교 신어관(C동) 504 호</p>
          <br/>
          <p>mm.inje.ac.kr</p>
        </div>
        <div className="footer-column">
          <h3>Inje University Multimedia Department</h3>
          <p>504, Sin-eo Hall (Building C), Inje University</p>
          <p>197 Inje-ro, Gimhae-si, Gyeongsangnam-do 50834</p>
          <br/>
          <p>mm.inje.ac.kr</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
