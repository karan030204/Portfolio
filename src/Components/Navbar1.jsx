import React, { useState } from "react";
import "../Elements/Navbar1.css";
import { Pivot as Hamburger, Turn } from "hamburger-react";
import { NavLink } from "react-router-dom";
import Mouse from "../MouseMove";
import HorizontalScrollText from "../HorizontalScrollText";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaPhone,
} from "react-icons/fa";
import {
  BiLogoLinkedin,
  BiMailSend,
  BiPhone,
  BiSolidPhone,
} from "react-icons/bi";

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
                  <div className="contact-btn">
                    <Mouse>
                      {/* <span className="contact-title">Contact</span> */}
                    </Mouse>
                    <div className="lets-colloborate">Let's Collaborate!</div>
                    <div>
                      <Mouse>
                        <button>Contact</button>
                      </Mouse>
                    </div>
                  </div>

                  <div>
                    <h1 className="follow">For more Info.</h1>
                    <div className="contact-details">
                      <div className="phone_no">
                        <BiSolidPhone color="rgba(255,255,255,0.5)" size={25} />
                        +91 9638935265
                      </div>
                      <div className="email_id">
                        <BiMailSend color="rgba(255,255,255,0.5)" size={25} />
                        Dattanikaran25@gmail.com
                      </div>
                    </div>
                    <div className="icons">
                      <FaGithub
                        className="icon"
                        color="rgba(255,255,255,0.5)"
                      />
                      <BiLogoLinkedin
                        className="icon"
                        color="rgba(255,255,255,0.5)"
                      />
                      <FaTwitter
                        className="icon"
                        color="rgba(255,255,255,0.5)"
                      />
                      <FaInstagram
                        className="icon"
                        color="rgba(255,255,255,0.5)"
                      />
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
