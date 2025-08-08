import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <main style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Gallery</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px', color: '#666' }}>Welcome to our gallery!</p>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '20px', 
        maxWidth: '80%', 
        margin: '0 auto' 
      }}>
        {images.map((image) => (
          <div 
            key={image.id}
            style={{ 
              backgroundColor: '#f8f9fa', 
              padding: '20px', 
              borderRadius: '12px', 
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e9ecef',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onClick={() => handleImageClick(image)}
            onMouseEnter={(e) => {
              // Only apply effect to the main container div
              if (e.target === e.currentTarget) {
                e.target.style.transform = 'scale(1.02)';
                e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
              }
            }}
            onMouseLeave={(e) => {
              // Only apply effect to the main container div
              if (e.target === e.currentTarget) {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }
            }}
          >
            <div style={{
               width: '100%',
               height: '200px',
               borderRadius: '8px',
               marginBottom: '15px',
               overflow: 'hidden',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center'
             }}>
              <img 
                src={image.src} 
                alt={image.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </div>
            <h3 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '18px' }}>
              {image.title}
            </h3>
            <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>
              {image.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Gallery;