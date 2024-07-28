import React from 'react'
import '../AboutPage/About.css'
import UnderlinedText from '../../components/common/Animation/UnderlinedText'
import image1 from '../../assets/images/what-does-a-music-producer-do.jpg'
function About() {
  return (
    <div>
      <h1 className='about-title'>Sound,  <em className='about-em'><UnderlinedText text="beautiful"/></em></h1>
      
      <p className='about-bio'>
 Meet Dan and Sante, two dynamic young hip-hop producers whose passion for music has taken the industry by storm.
 Hailing from Bari, they blend their unique talents and creative visions to craft beats that resonate with the heart and soul of hip-hop culture. 
 With a knack for innovation and a deep love for the genre, Dan and Sante infuse their tracks with fresh sounds and captivating rhythms. 
 Their collaborative energy and relentless dedication have quickly earned them a reputation as rising stars in the music production world. 
 From underground mixtapes to mainstream hits, Dan and Sante are redefining what it means to produce hip-hop music.</p>
 <img src={image1} className='image1' /> <p className='about-bio2'>
 Meet Dan and Sante, two dynamic young hip-hop producers whose passion for music has taken the industry by storm.
 Hailing from Bari, they blend their unique talents and creative visions to craft beats that resonate with the heart and soul of hip-hop culture. 
 With a knack for innovation and a deep love for the genre, Dan and Sante infuse their tracks with fresh sounds and captivating rhythms. 
 Their collaborative energy and relentless dedication have quickly earned them a reputation as rising stars in the music production world. 
 From underground mixtapes to mainstream hits, Dan and Sante are redefining what it means to produce hip-hop music.</p>

    </div>
   
  )
}

export default About
