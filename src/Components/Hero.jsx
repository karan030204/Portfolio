import React from "react";
import "../Elements/Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-img">
          {/* <img src="web_bg.png" alt=""  /> */}
          <div className="layer-1"></div>
          <div className="layer-2"></div>
        </div>
        <div className="page-no">
          <p className="first-page">01</p>
        </div>
        
        <div className="hero-bg-content">
          <p >Code. Create. Inspire.<br/> Crafting digital <br/>experiences. </p>
        </div>
        <div className="hero-moving-text"> 
          <p className="web-developer">Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
