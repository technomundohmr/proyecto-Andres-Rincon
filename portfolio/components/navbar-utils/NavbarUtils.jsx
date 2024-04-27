import "./navbar-utils.css";
import Sun from '/img/sun.svg'
import Moon from '/img/moon.svg'
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const NavbarUtils = () => {

  const themeChange = {
    light: 'dark',
    dark: 'light',
  }
  const {Theme, setTheme} = useContext(ThemeContext)

  const setThemeHandler = () => {
    setTheme(themeChange[Theme])
  }

  
  return <div className="navbar-utils">
      <div className="navbar-utils-container">
        <span>EN</span>
      </div>
      <div className="navbar-utils-container" onClick={setThemeHandler}>
        <span>
          <img src={(Theme == 'dark') ? Sun : Moon} alt="theme" />
        </span>
      </div>
    </div>;
};

export default NavbarUtils;