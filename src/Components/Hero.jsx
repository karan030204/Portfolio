import React, { useState, useEffect } from "react";
import "../Elements/Hero.css";

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const translateX = (+scrollPosition % windowWidth) - windowWidth;
  const translateY = (-scrollPosition % windowWidth) + windowWidth - 900;

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-bg-content">
          <div>
            {/* <p>
              Code. Create. Inspire.
              <br /> Crafting digital <br />
              experiences.
            </p> */}
          </div>
        </div>
        <div className="hero-moving-text">
          <p
            className="scrolling-text"
            style={{
              width: `${windowWidth}px`,
              transform: `translateX(${translateX}px)`,
            }}
          >
            DEVELOPER
          </p>
        </div>
        <div className="hero-moving-text1">
          <p
            className="scrolling-text1"
            style={{
              width: `${windowWidth}px`,
              transform: `translateX(${translateY}px)`,
            }}
          >
            WEBSITE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
