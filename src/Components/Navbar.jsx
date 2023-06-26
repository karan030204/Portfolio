import React, { useState } from "react";
import { TfiGithub, TfiTwitter, TfiLinkedin } from "react-icons/tfi";
import { Link, NavLink } from "react-router-dom";
import { Pivot as Hamburger, Turn } from "hamburger-react";

import "../Elements/Navbar.css";
import Mouse from "../MouseMove";
import { icons } from "react-icons";

const Navbar = () => {
  const [isToggleClicked, setIsToggleClicked] = useState(false);

  const handleHamburger = () => {
    setIsToggleClicked(!isToggleClicked);
  };
  return (
    <>
      {/* Top Horizontal Navbar */}
      {isToggleClicked && (
        <style>
          {`
            body {
              overflow:hidden
            }
          `}
        </style>
      )}

      <div className="top-navbar">
        <div className="t-navbar-content">
          <div className="t-navbar-inner-content">
            <div className="navbar-logo">
              <h1 className="logo">KD</h1>
              {/* <img src="bg.png" width={60} alt="" /> */}
              {/* <span>K</span>Dattani */}
              {/* <span> DATTANI </span> */}
            </div>
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
        </div>
      </div>

      <div
        className={`inner-menu ${isToggleClicked ? "open" : "close"}`}
        style={{
          transition: "opacity 0.3s ease-in",
          opacity: isToggleClicked ? 1 : 0,
        }}
      >
        <div className="inner-menu-content">
          <NavLink to="/" className="">
            <span>Home</span>
          </NavLink>
          <NavLink to="/about" className="">
            <span>About</span>
          </NavLink>
          <NavLink to="/skills" className="">
            <span>Skills</span>
          </NavLink>
          <NavLink to="/resume" className="">
            <span>Resume</span>
          </NavLink>
          <NavLink to="/projects" className="">
            <span>Projects</span>
          </NavLink>
          <NavLink to="/exp">
            <span>Exerience</span>
          </NavLink>
          <div className="inner-menu-center-big-text">MENU</div>
        </div>
        <div className="contact-details">
          <div className="contact-content">
            <p className="contact-title">Contact</p>
            <p className="phone_no">+91 9638935265</p>
            <p className="Email_id">Dattanikaran25@gmail.com</p>
          </div>
          <div className="social-media">
            <TfiGithub color="rgba(255,255,255,0.7)" size={20} />
            <TfiTwitter color="rgba(255,255,255,0.7)" size={20} />
            <TfiLinkedin color="rgba(255,255,255,0.7)" size={20} />
          </div>
        </div>
      </div>


      <div className="right_navbar_body">
        <nav className="right_navbar">
          <ul className="right_navbar_ul">
            <li>
              <a href="">Follow</a>
            </li>
            <li>
              <a href="" className="border"></a>
            </li>
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

export default Navbar;
