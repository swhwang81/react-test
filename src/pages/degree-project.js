import React from 'react';
import { useNavigate } from 'react-router-dom';
import './degree-project.css';

// Import images from the 16 folders
import img10 from '../images/10/10.jpg';
import img11 from '../images/11/11.jpg';
import img12 from '../images/12/12.jpg';
import img13 from '../images/13/13.jpg';
import img14 from '../images/14/14.jpg';
import img15 from '../images/15/15.jpg';
import img16 from '../images/16/16.jpg';

function DegreeProject() {
  const navigate = useNavigate();

  const images = [
    { id: 10, title: "Image 10", description: "Beautiful image from folder 10", src: img10 },
    { id: 11, title: "Image 11", description: "Beautiful image from folder 11", src: img11 },
    { id: 12, title: "Image 12", description: "Beautiful image from folder 12", src: img12 },
    { id: 13, title: "Image 13", description: "Beautiful image from folder 13", src: img13 },
    { id: 14, title: "Image 14", description: "Beautiful image from folder 14", src: img14 },
    { id: 15, title: "Image 15", description: "Beautiful image from folder 15", src: img15 },
    { id: 16, title: "Image 16", description: "Beautiful image from folder 16", src: img16 }
  ];

  const handleImageClick = (image) => {
    navigate(`/image/${image.id}`);
  };

  return (
    <main className="degree-project-main">
      <div className="degree-project-navigation">
        <button
          className="degree-project-nav-btn"
          onClick={() => navigate('/project')}
        >
          <span className="degree-project-nav-korean">디지털콘텐츠스튜디오</span>
          <span className="degree-project-nav-english">Digital Contents Studio</span>
        </button>
        <button className="degree-project-nav-btn active">
          <span className="degree-project-nav-korean">DC 졸업연구</span>
          <span className="degree-project-nav-english">Degree Project in DC Design</span>
        </button>
      </div>
      <article className="degree-project-article">
        <h1 className="degree-project-title">DC 졸업연구</h1>
        <h2 className="degree-project-title-en">Degree Project in DC Design</h2>
        <div className="degree-project-description">
          <p>DC 졸업연구는 디지털콘텐츠 전공 학생들의 4년간의 학습 성과를 보여주는 졸업 작품 전시회입니다. 각 학생은 자신만의 독창적인 아이디어와 기술을 바탕으로 완성도 높은 졸업 작품을 제작하여 전시합니다.</p>
          <p>The DC Degree Project is a graduation exhibition showcasing the four-year learning achievements of Digital Contents major students. Each student creates and exhibits high-quality graduation works based on their unique ideas and technical skills.</p>
        </div>
        <div className="degree-project-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className="degree-project-item"
              onClick={() => handleImageClick(image)}
            >
              <div className="degree-project-image-container">
                <img
                  src={image.src}
                  alt={image.title}
                  className="degree-project-image"
                />
              </div>
              <h3 className="degree-project-item-title">
                {image.title}
              </h3>
              <p className="degree-project-item-description">
                {image.description}
              </p>
            </div>
          ))}
        </div>

      </article>
    </main>
  );
}

export default DegreeProject;
