import React, { useState } from 'react';
import './App.css';

const Mouse = ({children}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 }); // Reset position when the mouse leaves
  };

  const handleMouseMove = (event) => {
    if (isHovered) {
      const elementRect = event.target.getBoundingClientRect();
      const offsetX = event.clientX - elementRect.left - 50;
      const offsetY = event.clientY - elementRect.top - 50;
      setPosition({ x: offsetX, y: offsetY });
    }
  };

  return (
    <div className="container">
      <div
        className={`box ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Mouse;
