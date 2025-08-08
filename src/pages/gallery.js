import React from 'react';
import { useNavigate } from 'react-router-dom';

function Gallery() {
  const navigate = useNavigate();

  const sampleImages = [
    { id: 1, title: "Mountain Landscape", description: "Beautiful mountain scenery at sunset" },
    { id: 2, title: "Ocean Waves", description: "Calming ocean waves on a sunny day" },
    { id: 3, title: "City Skyline", description: "Modern city skyline at night" },
    { id: 4, title: "Forest Path", description: "Peaceful forest trail in autumn" },
    { id: 5, title: "Desert Dunes", description: "Golden sand dunes stretching to the horizon" },
    { id: 6, title: "Waterfall", description: "Majestic waterfall in the wilderness" },
    { id: 7, title: "Flower Garden", description: "Colorful flowers in full bloom" },
    { id: 8, title: "Snowy Peak", description: "Snow-capped mountain peak" },
    { id: 9, title: "Beach Sunset", description: "Romantic sunset at the beach" },
    { id: 10, title: "Urban Street", description: "Busy city street with people" },
    { id: 11, title: "Lake Reflection", description: "Perfect reflection in a calm lake" },
    { id: 12, title: "Wildlife", description: "Animals in their natural habitat" },
    { id: 13, title: "Architecture", description: "Modern architectural masterpiece" },
    { id: 14, title: "Countryside", description: "Rolling hills and green pastures" },
    { id: 15, title: "Crystal Cave", description: "Stunning crystal formations underground" },
    { id: 16, title: "Aurora Borealis", description: "Northern lights dancing in the sky" },
    { id: 17, title: "Tropical Island", description: "Paradise island with palm trees" },
    { id: 18, title: "Vintage Car", description: "Classic automobile in perfect condition" },
    { id: 19, title: "Art Gallery", description: "Contemporary art on display" },
    { id: 20, title: "Space Nebula", description: "Colorful nebula in deep space" }
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
        {sampleImages.map((image) => (
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
              e.target.style.transform = 'scale(1.02)';
              e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={{
               width: '100%',
               height: '200px',
               backgroundColor: '#e0e0e0',
               borderRadius: '8px',
               marginBottom: '15px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               fontSize: '48px',
               color: '#666',
               fontWeight: 'bold'
             }}>
              📷
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