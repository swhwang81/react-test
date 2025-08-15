import React from 'react';
import { Link } from 'react-router-dom';
import './designer.css';



const designers = [
  {
    id: 1,
    name: "김민수",
    englishName: "Kim Min-su",
    works: [1, 2, 3]
  },
  {
    id: 2,
    name: "박준호",
    englishName: "Park Jun-ho",
    works: [4, 5, 6]
  },
  {
    id: 3,
    name: "이지은",
    englishName: "Lee Ji-eun",
    works: [7, 8, 9]
  },
  {
    id: 4,
    name: "최유진",
    englishName: "Choi Yu-jin",
    works: [10, 11, 12]
  },
  {
    id: 5,
    name: "정연우",
    englishName: "Jung Yeon-woo",
    works: [13, 14, 15]
  },
  {
    id: 6,
    name: "한소영",
    englishName: "Han So-young",
    works: [16, 17, 18]
  }
];

function Designer() {
  return (
    <>
      <nav>
        <div className="nav-left">
          <Link to="/" className="nav-item">UNFOLD THE FLOW</Link>
        </div>
        <div className="nav-right">
          <Link to="/about">ABOUT</Link>
          <Link to="/project">PROJECT</Link>
          <Link to="/designer" className="active">DESIGNER</Link>
        </div>
      </nav>
      <div className="designer-page">
        <div className="designer-header">
          <h1>Our Designers</h1>
          <p>창의적인 아이디어로 세상을 더 아름답게 만드는 디자이너들을 만나보세요</p>
        </div>
        
        <div className="designer-gallery">
          {designers.map((designer) => (
            <Link 
              key={designer.id} 
              to={`/designer/${designer.id}`} 
              className="designer-button"
            >
              <span className="designer-name" dangerouslySetInnerHTML={{ __html: `${designer.name}<br/>${designer.englishName}` }}></span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Designer; 
