import React from 'react';
import welcome from '../images/15/couple.jpg';

function Home() {
  return (
    <main >
       
        <div style={{marginTop:'10vh'}}>
          <img src={welcome} alt="Welcome" />
        </div>
        <div className='intro-text'>
        <h1>Welcome to my Web Test</h1>
        <p>This is my react project test</p>
        </div>
    </main>
  );
}

export default Home; 