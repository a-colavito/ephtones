import React from 'react';
import { useNavigate } from 'react-router-dom';
import video from './assets/videos/video2.mp4'
import { ReactTyped } from 'react-typed';
const OpeningPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home'); 
  };

  return (
    <div className="relative h-screen w-screen overflow-hidde">
      <video className="absolute top-0 left-0 h-full w-full object-cover" 
      src={video}
      autoPlay
      loop
      muted
      
      />
       <div className="absolute top-0 left-0 h-full w-full bg-black opacity-30"></div>
       <div className="absolute top-0 left-0 flex items-center justify-center h-full w-full z-10">
       
        <h1 className="text-slate-50 text-4xl md:text-6xl font-bold cursor-pointer" onClick={handleClick}>
        <ReactTyped 
                    strings={["EPHTONES."]}
                    typeSpeed={300}
                    backSpeed={20}
                    cursorChar=''
                    showCursor={true}
                    />
        </h1>
              
                
          
  
      
        </div>
       
    </div>
  );
};

export default OpeningPage;
