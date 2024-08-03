import React from 'react';
import UnderlinedText from '../../components/common/Animation/UnderlinedText';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

function About() {
  
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dkkvkj82k'
    }
  });

 
  const img = cld.image('f6hvjhemza2kon0w74vr')
    .format('auto')
    .quality('auto')
    

  return (
    <div className="flex-grow items-center justify-center min-h-screen bg-slate-50 p-2 dark:bg-blue-950">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 dark:text-slate-50">
          Sound, <em className="text-dark"><UnderlinedText text="beautiful" /></em>
        </h1>
        
        <p className="text-lg leading-relaxed mb-4 dark:text-slate-50">
          Meet Dan and Sante, two dynamic young hip-hop producers whose passion for music has taken the industry by storm.
          Hailing from Bari, they blend their unique talents and creative visions to craft beats that resonate with the heart and soul of hip-hop culture.
          With a knack for innovation and a deep love for the genre, Dan and Sante infuse their tracks with fresh sounds and captivating rhythms.
          Their collaborative energy and relentless dedication have quickly earned them a reputation as rising stars in the music production world.
          From underground mixtapes to mainstream hits, Dan and Sante are redefining what it means to produce hip-hop music.
        </p>
        <div className="w-100 h-100 mx-auto my-4">
          <AdvancedImage cldImg={img} className="object-cover w-full h-full rounded-lg shadow-lg" />
        </div>
       

        <p className="text-lg leading-relaxed dark:text-slate-50">
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
