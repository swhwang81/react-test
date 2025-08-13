import React from 'react';
import { Link } from 'react-router-dom';
import './designer.css';

const designers = [
  {
    id: 1,
    name: "김민수",
    specialty: "웹 디자인",
    image: "/src/images/designers/designer1.jpg",
    description: "모던하고 미니멀한 웹 디자인 전문가",
    works: [1, 2, 3] // 작품 ID들
  },
  {
    id: 2,
    name: "이지은",
    specialty: "UI/UX 디자인",
    image: "/src/images/designers/designer2.jpg",
    description: "사용자 경험을 중시하는 UI/UX 디자이너",
    works: [4, 5, 6]
  },
  {
    id: 3,
    name: "박준호",
    specialty: "그래픽 디자인",
    image: "/src/images/designers/designer3.jpg",
    description: "창의적인 그래픽 디자인 솔루션",
    works: [7, 8, 9]
  },
  {
    id: 4,
    name: "최유진",
    specialty: "브랜딩 디자인",
    image: "/src/images/designers/designer4.jpg",
    description: "브랜드 아이덴티티 구축 전문가",
    works: [10, 11, 12]
  },
  {
    id: 5,
    name: "정현우",
    specialty: "모바일 디자인",
    image: "/src/images/designers/designer5.jpg",
    description: "모바일 플랫폼 최적화 디자인",
    works: [13, 14, 15]
  },
  {
    id: 6,
    name: "한소영",
    specialty: "일러스트레이션",
    image: "/src/images/designers/designer6.jpg",
    description: "독창적인 일러스트레이션 작가",
    works: [16, 17, 18]
  }
];

function Designer() {
  return (
    <div className="designer-page">
      <div className="designer-header">
        <h1>Our Designers</h1>
        <p>창의적인 아이디어로 세상을 더 아름답게 만드는 디자이너들을 만나보세요</p>
      </div>
      
      <div className="designer-gallery">
        {designers.map((designer) => (
          <div key={designer.id} className="designer-card">
            <div className="designer-image">
              <img 
                src={designer.image} 
                alt={designer.name}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x400/cccccc/666666?text=Designer';
                }}
              />
            </div>
            <div className="designer-info">
              <h3>{designer.name}</h3>
              <p className="specialty">{designer.specialty}</p>
              <p className="description">{designer.description}</p>
              <Link 
                to={`/image/${designer.works[0]}`} 
                className="view-works-btn"
              >
                작품 보기
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Designer; 
