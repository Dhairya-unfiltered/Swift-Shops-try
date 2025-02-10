import React, { useState } from 'react';
import videoBg from '../assets/swiftshops_bg.mp4';
import sparkle from '../assets/sparkle.png';
import award from '../assets/feather1.png';
import Navbar from './Navbar';

const Main = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className={`main ${videoLoaded ? '' : 'bg-black'}`}>
      <video 
        src={videoBg} 
        autoPlay 
        loop 
        muted 
        className="video-bg" 
        onLoadedData={handleVideoLoad} 
      />
      <Navbar />
      <div className="content">
        <div className="inside text-center px-5 md:px-64">
          
          <h1 className="text-white text-3xl md:text-7xl font-bold mb-5">Hate Waiting in Queues?</h1>
          <p className="text-gray-300 text-lg md:text-2xl">
            Swift Shops is revolutionizing shopping with hassle-free convenience.
          </p>
          <a href="https://tally.so/r/n0Zzp6">
            <button 
              type="button" 
              className="text-white bg-pink-500 font-semibold rounded-full text-lg md:text-2xl px-5 text-center mt-5"
            >
              <img src={sparkle} className="sparkleimg" />Join the Waitlist
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
