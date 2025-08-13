import React from 'react';
import { useNavigate } from 'react-router-dom';
import './gallery.css';

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
import img11 from '../images/11/11.jpg';
import img12 from '../images/12/12.jpg';
import img13 from '../images/13/13.jpg';
import img14 from '../images/14/14.jpg';
import img15 from '../images/15/15.jpg';
import img16 from '../images/16/16.jpg';

function Gallery() {
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
    <main className="gallery-main">
      <h1 className="gallery-title">Gallery</h1>
      <p className="gallery-subtitle">Welcome to our gallery!</p>
      <div className="gallery-grid">
        {images.map((image) => (
          <div 
            key={image.id}
            className="gallery-item"
            onClick={() => handleImageClick(image)}
          >
            <div className="gallery-image-container">
              <img 
                src={image.src} 
                alt={image.title}
                className="gallery-image"
              />
            </div>
            <h3 className="gallery-item-title">
              {image.title}
            </h3>
            <p className="gallery-item-description">
              {image.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Gallery;