import React from 'react';
import UnderlinedText from '../../components/common/Animation/UnderlinedText';
import image1 from '../../assets/images/what-does-a-music-producer-do.jpg';

function About() {
  return (
    <div className ="flex items-center justify-center min-h-screen  bg-slate-50 p-4 ">
    <div className="container mx-auto p-2">
      <h1 className="text-4xl font-bold mb-4">
        Sound, <em className="text-dark"><UnderlinedText text="beautiful" /></em>
      </h1>
      
      <p className="text-lg leading-relaxed mb-4">
        Meet Dan and Sante, two dynamic young hip-hop producers whose passion for music has taken the industry by storm.
        Hailing from Bari, they blend their unique talents and creative visions to craft beats that resonate with the heart and soul of hip-hop culture.
        With a knack for innovation and a deep love for the genre, Dan and Sante infuse their tracks with fresh sounds and captivating rhythms.
        Their collaborative energy and relentless dedication have quickly earned them a reputation as rising stars in the music production world.
        From underground mixtapes to mainstream hits, Dan and Sante are redefining what it means to produce hip-hop music.
      </p>
      
      <img src={image1} alt="Music Producer" className="w-full h-auto rounded-lg mb-4" />

      <p className="text-lg leading-relaxed">
        Meet Dan and Sante, two dynamic young hip-hop producers whose passion for music has taken the industry by storm.
        Hailing from Bari, they blend their unique talents and creative visions to craft beats that resonate with the heart and soul of hip-hop culture.
        With a knack for innovation and a deep love for the genre, Dan and Sante infuse their tracks with fresh sounds and captivating rhythms.
        Their collaborative energy and relentless dedication have quickly earned them a reputation as rising stars in the music production world.
        From underground mixtapes to mainstream hits, Dan and Sante are redefining what it means to produce hip-hop music.
      </p>
    </div>
    </div>
    
  );
}

export default About;
