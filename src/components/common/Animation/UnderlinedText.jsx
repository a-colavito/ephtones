// src/UnderlinedText.jsx
import React, { useEffect, useState } from 'react';
import './UnderlinedText.css';

const UnderlinedText = ({ text }) => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    // Innesca l'animazione quando il componente viene montato
    setTrigger(true);
  }, []);

  return (
    <div className={`underline-container ${trigger ? 'animate' : ''}`}>
      {text}
    </div>
  );
};

export default UnderlinedText;
