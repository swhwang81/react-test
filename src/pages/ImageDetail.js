import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ImageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample images data (same as in gallery)
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

  const currentIndex = sampleImages.findIndex(img => img.id === parseInt(id));
  const image = sampleImages[currentIndex];

  if (!image) {
    return (
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Image not found</h1>
        <button 
          onClick={() => navigate('/gallery')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Back to Gallery
        </button>
      </main>
    );
  }

  // Calculate which 5 images to show
  const startIndex = Math.max(0, Math.min(currentIndex - 2, sampleImages.length - 5));
  const endIndex = Math.min(startIndex + 5, sampleImages.length);
  const visibleImages = sampleImages.slice(startIndex, endIndex);

  return (
    <main style={{ padding: '20px', maxWidth: '80%', margin: '0 auto', marginTop: '80px' }}>
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => navigate('/gallery')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          ← Back to Gallery
        </button>
      </div>

      <div style={{
        borderRadius: '12px',
        padding: '30px'
      }}>
        {/* 5 Images */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}>
          {visibleImages.map((img, index) => {
            const globalIndex = startIndex + index;
            const isCurrentImage = globalIndex === currentIndex;
            
            return (
              <div key={img.id} style={{
                borderRadius: '12px',
                padding: '20px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '100%',
                  height: '60vh',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '72px',
                  color: '#666',
                  fontWeight: 'bold'
                }}>
                  📷
                </div>

                <h2 style={{ 
                  margin: '0 0 15px 0', 
                  color: '#333', 
                  fontSize: '24px',
                  textAlign: 'center'
                }}>
                  {img.title}
                </h2>

                <p style={{ 
                  margin: '0 0 15px 0', 
                  color: '#666', 
                  fontSize: '16px',
                  lineHeight: '1.6',
                  textAlign: 'center'
                }}>
                  {img.description}
                </p>

                {isCurrentImage && (
                  <div style={{
                    textAlign: 'center',
                    padding: '15px'
                  }}>
                    <p style={{ margin: '0', color: '#999', fontSize: '14px' }}>
                      Image ID: {img.id}
                    </p>
                    <p style={{ margin: '5px 0 0 0', color: '#999', fontSize: '14px' }}>
                      Created: {new Date().toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default ImageDetail;
