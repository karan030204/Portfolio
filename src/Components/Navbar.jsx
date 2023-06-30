import React, { useState } from "react";
import { TfiGithub, TfiTwitter, TfiLinkedin } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
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
      {isToggleClicked ? (
        <style>{`
    .top-navbar{
      background-color:white;
      position:fixed;
    }
    `}</style>
      ) : (
        <style>{`

    `}</style>
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
                color="black"
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
          zIndex: "998",
        }}
      >
        <div className="inner-menu-details">
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
              <p className="contact-title">CONTACT</p>
              <p className="phone_no">+91 9638935265</p>
              {/* <p className="Email_id">Dattanikaran25@gmail.com</p> */}
            </div>
            <div className="social-media">
              <TfiGithub color="rgba(0,0,0,0.7)" className="social-icons" />
              <TfiTwitter color="rgba(0,0,0,0.7)" className="social-icons" />
              <TfiLinkedin color="rgba(0,0,0,0.7)" className="social-icons" />
              <MdEmail color="rgba(0,0,0,0.7)" className="social-icons" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
