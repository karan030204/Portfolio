import React, { useState } from "react";
import { TfiGithub, TfiTwitter, TfiLinkedin } from "react-icons/tfi";
import { Link, NavLink } from "react-router-dom";
import { Pivot as Hamburger, Turn } from "hamburger-react";

import "../Elements/Navbar.css";

const Navbar = () => {
  const [isToggleClicked, setIsToggleClicked] = useState(false);

  const handleHamburger = () => {
    setIsToggleClicked(!isToggleClicked);
  };
  return (
    <>
      {/* Top Horizontal Navbar */}
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
      {isToggleClicked && (
        <div className="inner-menu">
          <div className="inner-menu-content">
            <NavLink to="/" className="" ><span>Home</span></NavLink>
            <NavLink to="/about" className=""><span>About</span></NavLink>
            <NavLink to="/skills" className=""><span>Skills</span></NavLink>
            <NavLink to="/resume" className=""><span>Resume</span></NavLink>
            <NavLink to="/projects" className=""><span>Projects</span></NavLink>
            <NavLink to="/exp"><span>Exerience</span></NavLink>
          <div className="inner-menu-center-big-text">MENU</div>
          </div>
        </div>
      )}

      {/* Left Navbar */}

      {/* <div class="left-navbar">
        <div class="left-navbar-content">
            <span className="linkedin">
              <TfiGithub color="rgba(255,255,255,0.7)" size={20} />
            </span>
            <span className="twitter">
              <TfiTwitter color="rgba(255,255,255,0.7)" size={20} />
            </span>
            <span className="github">
              <TfiLinkedin color="rgba(255,255,255,0.7)" size={20} />
            </span>

        </div>
            <span className="follow link">Scroll</span>
      </div> */}

      {/* <div className="left-navbar">
        <div className="l-navbar-content">
          <div className="scroll-arrow ">
            <a href="#" class="link">
              <p>Scroll</p>
            </a>
          </div>
        </div>
      </div> */}

      {/* Bottom navbar */}
      {/* <div className="bottom-navbar">
        <div className="b-navbar-content">
          <div className="icons">
            <span className="linkedin"><TfiGithub color="rgba(255,255,255,0.7)" size={20}/></span>
            <span className="twitter"><TfiTwitter color="rgba(255,255,255,0.7)" size={20}/></span>
            <span className="github"><TfiLinkedin color="rgba(255,255,255,0.7)" size={20}/></span>
          </div>
          <p className="link1">Follow</p>
        </div>
      </div>
 */}

      {/* Right Navbar */}

      <div className="right-navbar">
        <div className="r-navbar-content"></div>
      </div>
      {/* <div className="right-navbar">
        <div className="r-navbar-content">
          <div className="r-navbar-menu">
                <Link href="#home" activeClass="active" smooth spy to="home"  >01</Link>
                <Link href="#about" activeClass="active" smooth spy to="home" >02</Link>
                <Link href="#tech" >03</Link>
                <Link href="#projects" >04</Link>
                <Link href="#exp" >05</Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
