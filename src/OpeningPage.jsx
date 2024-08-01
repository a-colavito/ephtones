import React from 'react';
import { useNavigate } from 'react-router-dom';

const OpeningPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home'); // Cambia '/home' con il percorso della tua homepage
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="flex items-center justify-center w-80 h-80 bg-white rounded-lg shadow-lg cursor-pointer"
        onClick={handleClick}
      >
        <h1 className="text-4xl font-bold text-center text-indigo-600">EPHTONES</h1>
      </div>
    </div>
  );
};

export default OpeningPage;
