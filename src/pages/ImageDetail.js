import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './imagedetail.css';

// Import all images from each folder
import img1 from '../images/1/1.jpg';
import img1_1 from '../images/1/1-1.jpg';
import img2 from '../images/2/2.jpg';
import img2_1 from '../images/2/2-1.jpg';
import img3 from '../images/3/3.jpg';
import img3_1 from '../images/3/3-1.jpg';
import img4 from '../images/4/4.jpg';
import img4_1 from '../images/4/4-1.jpg';
import img5 from '../images/5/5.jpg';
import img5_1 from '../images/5/5-1.jpg';
import img6 from '../images/6/6.jpg';
import img6_1 from '../images/6/6-1.jpg';
import img7 from '../images/7/7.jpg';
import img7_1 from '../images/7/7-1.jpg';
import img8 from '../images/8/8.jpg';
import img8_1 from '../images/8/8-1.jpg';
import img9 from '../images/9/9.jpg';
import img9_1 from '../images/9/9-1.jpg';
import img10 from '../images/10/10.jpg';
import img10_1 from '../images/10/10-1.jpg';
import img11 from '../images/11/11.jpg';
import img11_1 from '../images/11/11-1.jpg';
import img12 from '../images/12/12.jpg';
import img12_1 from '../images/12/12-1.jpg';
import img13 from '../images/13/13.jpg';
import img13_1 from '../images/13/13-1.jpg';
import img14 from '../images/14/14.jpg';
import img14_1 from '../images/14/14-1.jpg';
import img15 from '../images/15/15.jpg';
import img15_1 from '../images/15/15-1.jpg';
import img16 from '../images/16/16.jpg';
import img16_1 from '../images/16/16-1.jpg';

// 디자이너 정보
const designerInfo = {
  1: { name: "김민수", specialty: "웹 디자인", description: "모던하고 미니멀한 웹 디자인 전문가" },
  2: { name: "김민수", specialty: "웹 디자인", description: "모던하고 미니멀한 웹 디자인 전문가" },
  3: { name: "김민수", specialty: "웹 디자인", description: "모던하고 미니멀한 웹 디자인 전문가" },
  4: { name: "박준호", specialty: "UI/UX 디자인", description: "사용자 경험을 중시하는 UI/UX 디자이너" },
  5: { name: "박준호", specialty: "UI/UX 디자인", description: "사용자 경험을 중시하는 UI/UX 디자이너" },
  6: { name: "박준호", specialty: "UI/UX 디자인", description: "사용자 경험을 중시하는 UI/UX 디자이너" },
  7: { name: "이지은", specialty: "그래픽 디자인", description: "창의적인 그래픽 디자인 솔루션" },
  8: { name: "이지은", specialty: "그래픽 디자인", description: "창의적인 그래픽 디자인 솔루션" },
  9: { name: "이지은", specialty: "그래픽 디자인", description: "창의적인 그래픽 디자인 솔루션" },
  10: { name: "최유진", specialty: "브랜딩 디자인", description: "브랜드 아이덴티티 구축 전문가" },
  11: { name: "최유진", specialty: "브랜딩 디자인", description: "브랜드 아이덴티티 구축 전문가" },
  12: { name: "최유진", specialty: "브랜딩 디자인", description: "브랜드 아이덴티티 구축 전문가" },
  13: { name: "정연우", specialty: "모바일 디자인", description: "모바일 플랫폼 최적화 디자인" },
  14: { name: "정연우", specialty: "모바일 디자인", description: "모바일 플랫폼 최적화 디자인" },
  15: { name: "정연우", specialty: "모바일 디자인", description: "모바일 플랫폼 최적화 디자인" },
  16: { name: "한소영", specialty: "일러스트레이션", description: "독창적인 일러스트레이션 작가" }
};

function ImageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Define all images with their folder structure - each folder has 2 images
  const folderImages = {
    1: [
      { id: 1, title: "Image 1", description: "Beautiful image from folder 1", src: img1 },
      { id: 1.1, title: "Image 1-1", description: "Additional image from folder 1", src: img1_1 }
    ],
    2: [
      { id: 2, title: "Image 2", description: "Beautiful image from folder 2", src: img2 },
      { id: 2.1, title: "Image 2-1", description: "Additional image from folder 2", src: img2_1 }
    ],
    3: [
      { id: 3, title: "Image 3", description: "Beautiful image from folder 3", src: img3 },
      { id: 3.1, title: "Image 3-1", description: "Additional image from folder 3", src: img3_1 }
    ],
    4: [
      { id: 4, title: "Image 4", description: "Beautiful image from folder 4", src: img4 },
      { id: 4.1, title: "Image 4-1", description: "Additional image from folder 4", src: img4_1 }
    ],
    5: [
      { id: 5, title: "Image 5", description: "Beautiful image from folder 5", src: img5 },
      { id: 5.1, title: "Image 5-1", description: "Additional image from folder 5", src: img5_1 }
    ],
    6: [
      { id: 6, title: "Image 6", description: "Beautiful image from folder 6", src: img6 },
      { id: 6.1, title: "Image 6-1", description: "Additional image from folder 6", src: img6_1 }
    ],
    7: [
      { id: 7, title: "Image 7", description: "Beautiful image from folder 7", src: img7 },
      { id: 7.1, title: "Image 7-1", description: "Additional image from folder 7", src: img7_1 }
    ],
    8: [
      { id: 8, title: "Image 8", description: "Beautiful image from folder 8", src: img8 },
      { id: 8.1, title: "Image 8-1", description: "Additional image from folder 8", src: img8_1 }
    ],
    9: [
      { id: 9, title: "Image 9", description: "Beautiful image from folder 9", src: img9 },
      { id: 9.1, title: "Image 9-1", description: "Additional image from folder 9", src: img9_1 }
    ],
    10: [
      { id: 10, title: "Image 10", description: "Beautiful image from folder 10", src: img10 },
      { id: 10.1, title: "Image 10-1", description: "Additional image from folder 10", src: img10_1 }
    ],
    11: [
      { id: 11, title: "Image 11", description: "Beautiful image from folder 11", src: img11 },
      { id: 11.1, title: "Image 11-1", description: "Additional image from folder 11", src: img11_1 }
    ],
    12: [
      { id: 12, title: "Image 12", description: "Beautiful image from folder 12", src: img12 },
      { id: 12.1, title: "Image 12-1", description: "Additional image from folder 12", src: img12_1 }
    ],
    13: [
      { id: 13, title: "Image 13", description: "Beautiful image from folder 13", src: img13 },
      { id: 13.1, title: "Image 13-1", description: "Additional image from folder 13", src: img13_1 }
    ],
    14: [
      { id: 14, title: "Image 14", description: "Beautiful image from folder 14", src: img14 },
      { id: 14.1, title: "Image 14-1", description: "Additional image from folder 14", src: img14_1 }
    ],
    15: [
      { id: 15, title: "Image 15", description: "Beautiful image from folder 15", src: img15 },
      { id: 15.1, title: "Image 15-1", description: "Additional image from folder 15", src: img15_1 }
    ],
    16: [
      { id: 16, title: "Image 16", description: "Beautiful image from folder 16", src: img16 },
      { id: 16.1, title: "Image 16-1", description: "Additional image from folder 16", src: img16_1 }
    ]
  };

  const folderId = parseInt(id);
  const currentFolderImages = folderImages[folderId];

  if (!currentFolderImages) {
    return (
      <main className="imagedetail-error-main">
        <h1>Folder not found</h1>
        <button 
          onClick={() => navigate('/gallery')}
          className="imagedetail-error-button"
        >
          Back to Gallery
        </button>
      </main>
    );
  }

  return (
    <main className="imagedetail-main">
      <div className="imagedetail-back-button-container">
        <button 
          onClick={() => navigate('/gallery')}
          className="imagedetail-back-button gallery"
        >
          ← Back to Gallery
        </button>
      </div>

      <div className="imagedetail-content">
        <h1 className="imagedetail-title">
          Folder {folderId} Images
        </h1>
        
        {designerInfo[folderId] && (
          <div className="imagedetail-designer-info">
            <h3 className="imagedetail-designer-name">
              디자이너: {designerInfo[folderId].name}
            </h3>
            <p className="imagedetail-designer-specialty">
              전문분야: {designerInfo[folderId].specialty}
            </p>
            <p className="imagedetail-designer-description">
              {designerInfo[folderId].description}
            </p>
            <button 
              onClick={() => navigate('/designer')}
              className="imagedetail-designer-button"
            >
              디자이너 페이지로
            </button>
          </div>
        )}
        
        <p className="imagedetail-subtitle">
          All images from folder {folderId}
        </p>

        {/* All Images from the selected folder */}
        <div className="imagedetail-images-container">
          {currentFolderImages.map((img, index) => (
            <div key={img.id} className="imagedetail-image-card">
              <div className="imagedetail-image-container">
                <img 
                  src={img.src} 
                  alt={img.title}
                  className="imagedetail-image"
                />
              </div>

              <h2 className="imagedetail-image-title">
                {img.title}
              </h2>

              <p className="imagedetail-image-description">
                {img.description}
              </p>

              <div className="imagedetail-image-meta">
                <p className="imagedetail-image-id">
                  Image ID: {img.id}
                </p>
                <p className="imagedetail-folder-info">
                  Folder: {folderId}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ImageDetail;
