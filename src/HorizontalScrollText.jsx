import React, { useState, useEffect } from 'react';

const HorizontalScrollText = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const translateX = (+scrollPosition % windowWidth) - windowWidth + 900;

  const getTransformValue = () => {
    return `translateX(${translateX}px)`;
  };

  return (
    <div
      style={{
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
        transform: getTransformValue(),
        transition: 'transform 0.1s ease',
      }}
    >
      {children}
    </div>
  );
};

export default HorizontalScrollText;
