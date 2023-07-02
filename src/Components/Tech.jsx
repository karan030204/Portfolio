import React from 'react';
import MovingText from '../HorizontalScrollText';

const Tech = () => {
  return (
    <div>
      <h1>Scrolling Text Example</h1>
      <div style={{ height: '2000px', display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }} >
        <MovingText direction="left" pixelsToMove={2}>
          <h2 style={{fontSize:"100px"}}>Welcome to My Website</h2>
        </MovingText>
        <MovingText direction="right" pixelsToMove={2}>
          <h2 style={{fontSize:"100px"}}>This Text Moves When You Scroll</h2>
        </MovingText>
      </div>
    </div>
  );
};

export default Tech;
