import React, { useState, useEffect } from "react";
import "../Elements/Hero.css";
import { TfiGithub, TfiTwitter, TfiLinkedin } from "react-icons/tfi";

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
    <>
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-bg-content">
                <p className="hero-title">DESIGN THE <br/> DREAM</p>
                <p className="hero-description">DESIGNER WITH A PASSION  <br/> FOR CREATING INTUITIVE <br/> DIGITAL EXPERIENCES</p>
          </div>
              <div className="hero-moving-text1">
                <p
                  className="scrolling-text1"
                  style={{
                    width: `${windowWidth}px`,
                    transform: `translateX(${translateY}px)`,
                  }}
                >
                  WEB DEVELOPER 
                </p>
              </div>
          <div className="hero-moving-text">
            {/* <p
              className="scrolling-text"
              style={{
                width: `${windowWidth}px`,
                transform: `translateX(${translateX}px)`,
              }}
            >
              DEVELOPER
            </p> */}
          </div>
        </div>
      </div>

      <div className="right_navbar_body">
        <nav className="right_navbar">
          <ul className="right_navbar_ul">
            {/* <li>
              <a href="">Follow</a>
            </li> */}
            {/* <li>
              <a href="" className="border"></a>
            </li> */}
            <li className="icons">
              <a href="">
                <TfiTwitter color="rgba(255,255,255,0.7)" size={20} />
              </a>
            </li>
            <li>
              <a href="">
                <TfiGithub color="rgba(255,255,255,0.7)" size={20} />
              </a>
            </li>
            <li>
              <a href="">
                <TfiLinkedin color="rgba(255,255,255,0.7)" size={20} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Hero;
