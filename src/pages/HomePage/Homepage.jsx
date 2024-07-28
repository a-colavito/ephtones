import React from 'react';
import './HomePage.css';
import '../../components/common/Navbar/Navbar'
import '../../components/common/Animation/Typewriter'
import Typewriter from '../../components/common/Animation/Typewriter';
import { ReactTyped } from "react-typed";

const HomePage = () => {
    return (

       
        <div className='home-page'>
            <h1 className='title'> <ReactTyped strings={["EPHTONES"]} typeSpeed={300} backSpeed={20} cursorChar=' | ' showCursor={true}  /></h1>
            
        </div>
    )
}

export default HomePage;