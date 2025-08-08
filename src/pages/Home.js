import React from 'react';
import backgroundGif from '../images/intro/intro.gif';

function Home() {
  return (
    <main style={{
      backgroundImage: `url(${backgroundGif})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
    }}>
            <div className="intro-text" style={{
        marginTop: '-70vh',
        textAlign: 'center'
      }}>
        <h1>Welcome to my Web Test</h1>
        <p>This is my react project test</p>
      </div>
    </main>
  );
}

export default Home; 