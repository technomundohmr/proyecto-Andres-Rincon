import "./navbar.css";
import navIcon from "/img/hamburger-menu.svg";

import { useState } from "react";
import CrossWhite from '/img/cross-white.svg'
import NavbarUtils from "../navbar-utils/NavbarUtils";

const Navbar = () => {

  const [ActiveNavbar, setActiveNavbar] = useState(false)

  const ActiveNavbarHandler = (status) => {
    setActiveNavbar(status);
  }

  return <>  
    <nav className="navbar">
      <div className="navicon hover-click" onClick={() => ActiveNavbarHandler(true)}>
        <img src={navIcon} alt="navbar" />
      </div>
      <NavbarUtils />
    </nav>
    {(ActiveNavbar) && <nav className="full-navbar">
      <span className="close-navbar-btn hover-click" onClick={() => ActiveNavbarHandler(false)}>
        <img src={CrossWhite} />
      </span>
      <ul>
        <a href="#"><li><h2>Home</h2></li></a>
        <a href="#"><li><h2>Home</h2></li></a>
        <a href="#"><li><h2>Home</h2></li></a>
        <a href="#"><li><h2>Home</h2></li></a>
        <a href="#"><li><h2>Home</h2></li></a>
      </ul>
    </nav>
    }
    
  </> 
};

export default Navbar;