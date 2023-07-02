import React, { useState, useEffect } from "react";
import "../Elements/Hero.css";
import { TfiGithub, TfiTwitter, TfiLinkedin } from "react-icons/tfi";
import HorizontalScrollText from "../HorizontalScrollText";
import MovingText from "../HorizontalScrollText";

const Hero = () => {


  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          {/* <div className="hero-bg-content">
            <p className="hero-description">
              DESIGNER WITH A PASSION <br /> FOR CREATING INTUITIVE <br />{" "}
              DIGITAL EXPERIENCES
            </p>
          </div> */}

          {/* <div className="image">
            <img src="16.jpg" alt="" />
          </div> */}

          <div className="hero-moving-text1">
          <MovingText direction="left" pixelsToMove={2}>
            <p
              className="scrolling-text1"
              // style={{
              //   width: `${windowWidth}px`,
              //   transform: `translateX(${translateY}px)`,
              // }}
            >
              WEBSITE
            </p>
            </MovingText>
              
          </div>
          <div className="hero-moving-text">
            <MovingText direction="right" pixelsToMove={2} >
            <p
              className="scrolling-text"
              // style={{
              //   width: `${windowWidth}px`,
              //   transform: `translateX(${translateX}px)`,
              // }}
            >
              DEVELOPER
            </p>
            </MovingText>
          </div>
        </div>
      </div>

      {/* <div className="right_navbar_body">
        <nav className="right_navbar">
          <ul className="right_navbar_ul">
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
      </div> */}
    </>
  );
};

export default Hero;
