// src/OpeningPage.js
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './OpeningPage.css'; // per gli stili del riquadro

const OpeningPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home'); // Cambia '/home' con il percorso della tua homepage
  };

  return (
    <div className="opening-page">
      <div className="clickable-box" onClick={handleClick}>
      <h1 className='main-title'> EPHTONES </h1>
      </div>
    </div>
  );
};

export default OpeningPage;
