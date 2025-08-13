import React from 'react';
import { useNavigate } from 'react-router-dom';
import './project.css';

// Import images from the 16 folders
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

function Project() {
  const navigate = useNavigate();

  const images = [
    { id: 1, title: "Image 1", description: "Beautiful image from folder 1", src: img1 },
    { id: 2, title: "Image 2", description: "Beautiful image from folder 2", src: img2 },
    { id: 3, title: "Image 3", description: "Beautiful image from folder 3", src: img3 },
    { id: 4, title: "Image 4", description: "Beautiful image from folder 4", src: img4 },
    { id: 5, title: "Image 5", description: "Beautiful image from folder 5", src: img5 },
    { id: 6, title: "Image 6", description: "Beautiful image from folder 6", src: img6 },
    { id: 7, title: "Image 7", description: "Beautiful image from folder 7", src: img7 },
    { id: 8, title: "Image 8", description: "Beautiful image from folder 8", src: img8 },
    { id: 9, title: "Image 9", description: "Beautiful image from folder 9", src: img9 },
    { id: 10, title: "Image 10", description: "Beautiful image from folder 10", src: img10 },
  ];

  const handleImageClick = (image) => {
    navigate(`/image/${image.id}`);
  };

  return (
    <main className="project-main">
      <div className="project-navigation">
        <button className="project-nav-btn active">
          <span className="project-nav-korean">디지털콘텐츠스튜디오</span>
          <span className="project-nav-english">Digital Contents Studio</span>
        </button>
        <button
          className="project-nav-btn"
          onClick={() => navigate('/degree-project')}
        >
          <span className="project-nav-korean">DC 졸업연구</span>
          <span className="project-nav-english">Degree Project in DC Design</span>
        </button>
      </div>
      <article className="project-article">
        <h1 className="project-title">디지털컨텐츠스튜디오</h1>
        <h2 className="project-title-en">Digital Contents Studio</h2>
        <div className="project-description">
          <p>디지털콘텐츠스튜디오는 창의적이고 혁신적인 디지털 콘텐츠 제작을 위한 실험적 공간입니다. 웹 디자인, 모바일 개발, 게임 디자인, 영상 제작 등 다양한 분야의 프로젝트를 통해 학생들의 실무 능력을 향상시키고 있습니다.</p>
          <p>The Digital Contents Studio is an experimental space for creating creative and innovative digital content. We enhance students' practical skills through various projects in web design, mobile development, game design, and video production.</p>
        </div>
        <div className="project-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className="project-item"
              onClick={() => handleImageClick(image)}
            >
              <div className="project-image-container">
                <img
                  src={image.src}
                  alt={image.title}
                  className="project-image"
                />
              </div>
              <h3 className="project-item-title">
                {image.title}
              </h3>
              <p className="project-item-description">
                {image.description}
              </p>
            </div>
          ))}
        </div>

      </article>
    </main>
  );
}

export default Project;