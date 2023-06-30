import React, { useState } from "react";
import "../Elements/Navbar1.css";
import { Pivot as Hamburger, Turn } from "hamburger-react";
import { NavLink } from "react-router-dom";
import Mouse from "../MouseMove";
import HorizontalScrollText from "../HorizontalScrollText";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
// import {BiLogoLinkedin } from 'react-icons/bi'

const Navbar1 = () => {
  const [isToggleClicked, setIsToggleClicked] = useState(false);

  const handleHamburger = () => {
    setIsToggleClicked(!isToggleClicked);
  };
  return (
    <>
      <nav>
        <div className="top-navbar">
          <div className="inner-top-navbar">
            <div className="navbar-Logo">KD</div>
            <div className="navbar-hamburger">
              <Mouse>
                <Hamburger
                  easing="ease-in"
                  color="white"
                  toggle={handleHamburger}
                  size={452}
                  label="show menu"
                  rounded
                  distance={"lg"}
                  toggled={isToggleClicked}
                  onToggle={(toggled) => {}}
                />
              </Mouse>
            </div>
          </div>
          {isToggleClicked && (
            <div className={`menu ${isToggleClicked ? "open" : "close"}`}>
              <div className="inner_menu">
                <div className="left-menu">
                  <Mouse>
                    <NavLink to="/" end className="menu-title">
                      <number>01</number> Home
                    </NavLink>
                  </Mouse>
                  <Mouse>
                    <NavLink to="/about" end className="menu-title">
                      <number>02</number>
                      About
                    </NavLink>
                  </Mouse>
                  <Mouse>
                    <NavLink to="/skills" end className="menu-title">
                      <number>03</number>
                      Skills
                    </NavLink>
                  </Mouse>
                  <Mouse>
                    <NavLink to="/projects" end className="menu-title">
                      <number>04</number>
                      Projects
                    </NavLink>
                  </Mouse>
                  <Mouse>
                    <NavLink to="/exp" end className="menu-title">
                      <number>05</number>
                      Experience
                    </NavLink>
                  </Mouse>
                  <div className="center-big-text">MENU</div>
                </div>
                <div className="right-menu">
                  <div className="contact-details"> 
                    <Mouse>
                      <span className="contact-title">Contact</span>
                    </Mouse>
                    <div className="phone_no">+91 9638935265</div>
                    <div className="email_id">Dattanikaran25@gmail.com</div>
                    <div className="icons">  <FaGithub size={30} color="white" />
                    {/* <BiLogoLinkedin size={30} color="black" /> */}
                    <FaTwitter size={30} color="white" />
                    <FaInstagram size={30} color="white" /></div>
                  
                  </div>
                  <div className="contact-btn">
                    <div className="lets-colloborate">Let's Collaborate!</div>
                    <div>
                      <Mouse>
                        <button>Contact</button>
                      </Mouse>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
