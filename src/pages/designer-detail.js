import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './designer-detail.css';

// 디자이너 이미지 import
import designer1 from '../images/designers/designer1.jpg';
import designer2 from '../images/designers/designer2.jpg';
import designer3 from '../images/designers/designer3.jpg';
import designer4 from '../images/designers/designer4.jpg';
import designer5 from '../images/designers/designer5.jpg';
import designer6 from '../images/designers/designer6.jpg';

// 작품 이미지 import
import img1 from '../images/1/1.jpg';
import img2 from '../images/2/2.jpg';
import img3 from '../images/3/3.jpg';
import img4 from '../images/4/4.jpg';
import img5 from '../images/5/5.jpg';
import img6 from '../images/6/6.jpg';
import img7 from '../images/7/7.jpg';
import img8 from '../images/8/8.jpg';
import img9 from '../images/9/9.jpg';
import img10 from '../images/10/10.jpg';
import img11 from '../images/11/11.jpg';
import img12 from '../images/12/12.jpg';
import img13 from '../images/13/13.jpg';
import img14 from '../images/14/14.jpg';
import img15 from '../images/15/15.jpg';
import img16 from '../images/16/16.jpg';

const designers = [
  {
    id: 1,
    name: "김민수",
    englishName: "Kim Min-su",
    email: "kim.minsu@inje.ac.kr",
    specialty: "웹 디자인",
    image: designer1,
    description: "모던하고 미니멀한 웹 디자인 전문가",
    works: [1, 2, 3]
  },
  {
    id: 2,
    name: "박준호",
    englishName: "Park Jun-ho",
    email: "park.junho@inje.ac.kr",
    specialty: "UI/UX 디자인",
    image: designer2,
    description: "사용자 경험을 중시하는 UI/UX 디자이너",
    works: [4, 5, 6]
  },
  {
    id: 3,
    name: "이지은",
    englishName: "Lee Ji-eun",
    email: "lee.jieun@inje.ac.kr",
    specialty: "그래픽 디자인",
    image: designer3,
    description: "창의적인 그래픽 디자인 솔루션",
    works: [7, 8, 9]
  },
  {
    id: 4,
    name: "최유진",
    englishName: "Choi Yu-jin",
    email: "choi.yujin@inje.ac.kr",
    specialty: "브랜딩 디자인",
    image: designer4,
    description: "브랜드 아이덴티티 구축 전문가",
    works: [10, 11, 12]
  },
  {
    id: 5,
    name: "정연우",
    englishName: "Jung Yeon-woo",
    email: "jung.yeonwoo@inje.ac.kr",
    specialty: "모바일 디자인",
    image: designer5,
    description: "모바일 플랫폼 최적화 디자인",
    works: [13, 14, 15]
  },
  {
    id: 6,
    name: "한소영",
    englishName: "Han So-young",
    email: "han.soyoung@inje.ac.kr",
    specialty: "일러스트레이션",
    image: designer6,
    description: "독창적인 일러스트레이션 작가",
    works: [16, 17, 18]
  }
];

const workImages = {
  1: img1, 2: img2, 3: img3, 4: img4, 5: img5, 6: img6,
  7: img7, 8: img8, 9: img9, 10: img10, 11: img11, 12: img12,
  13: img13, 14: img14, 15: img15, 16: img16
};

function DesignerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const designer = designers.find(d => d.id === parseInt(id));
  
  if (!designer) {
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
        <div className="designer-detail-page">
          <div className="error-message">
            <h2>디자이너를 찾을 수 없습니다</h2>
            <button onClick={() => navigate('/designer')}>디자이너 목록으로 돌아가기</button>
          </div>
        </div>
      </>
    );
  }

  const handleWorkClick = (workId) => {
    navigate(`/image/${workId}`);
  };

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
      <div className="designer-detail-page">
        <div className="designer-detail-header">
          <h1>{designer.name}</h1>
          <p className="english-name">{designer.englishName}</p>
          <p className="email">{designer.email}</p>
        </div>
        
        <div className="designer-introduction">
          <div className="intro-korean">
            <p>창의적이고 혁신적인 디자인 솔루션을 통해 사용자에게 의미 있는 경험을 제공합니다. 각 프로젝트는 사용자의 니즈를 깊이 이해하고, 직관적이고 아름다운 인터페이스로 구현하여 만족스러운 결과물을 만들어냅니다.</p>
          </div>
          <div className="intro-english">
            <p>We provide meaningful experiences to users through creative and innovative design solutions. Each project deeply understands user needs and implements intuitive and beautiful interfaces to create satisfying results.</p>
          </div>
        </div>
        
        <div className="designer-works">
          <h3>작품 목록</h3>
          <div className="works-grid">
            {designer.works.slice(0, 2).map((workId) => (
              <div 
                key={workId} 
                className="work-thumbnail"
                onClick={() => handleWorkClick(workId)}
              >
                <img 
                  src={workImages[workId]} 
                  alt={`작품 ${workId}`}
                />
                <div className="work-overlay">
                  <span>작품 {workId}</span>
                </div>
              </div>
            ))}
          </div>
          <button 
            className="back-btn"
            onClick={() => navigate('/designer')}
          >
            디자이너 목록
          </button>
        </div>
      </div>
    </>
  );
}

export default DesignerDetail;
