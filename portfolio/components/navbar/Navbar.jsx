import "./navbar.css";
import navIcon from "/img/hamburger-menu.svg";
import Sun from '/img/sun.svg'
import Moon from '/img/moon.svg'
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import CrossWhite from '/img/cross-white.svg'

const Navbar = () => {
  const themeChange = {
    light: 'dark',
    dark: 'light',
  }
  const {Theme, setTheme} = useContext(ThemeContext)

  const [ActiveNavbar, setActiveNavbar] = useState(false)
  const setThemeHandler = () => {
    setTheme(themeChange[Theme])
  }

  const ActiveNavbarHandler = (status) => {
    setActiveNavbar(status);
  }

  return <>  
    <nav className="navbar">
      <div className="navicon hover-click" onClick={() => ActiveNavbarHandler(true)}>
        <img src={navIcon} alt="navbar" />
      </div>
      <div className="navbar-utils">
        <div className="navbar-utils-container">
          <span>EN</span>
        </div>
        <div className="navbar-utils-container" onClick={setThemeHandler}>
          <span>
            <img src={(Theme == 'dark') ? Sun : Moon} alt="theme" />
          </span>
        </div>
      </div>
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