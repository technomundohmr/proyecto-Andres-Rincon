import "./navbar.css";
import navIcon from "/img/hamburger-menu.svg";

import { useState , useEffect} from "react";
import CrossWhite from '/img/cross-white.svg'
import NavbarUtils from "../navbar-utils/NavbarUtils";
import { useRequest } from "../../hooks/useRequest";

const Navbar = () => {

  const [ActiveNavbar, setActiveNavbar] = useState(false)

  const ActiveNavbarHandler = (status) => {
    setActiveNavbar(status);
  }

  const {ResponseData, setSendRequest} = useRequest('menu-items/main/portfolio', 'get');

  useEffect(() => {
    setSendRequest(true);
  }, [])
  
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
        {ResponseData && Object.entries(ResponseData).map(data => { 
            let {id, name, path} = data[1]
            return <a key={id} href={path}>
              <li><h2>{name}</h2></li>
            </a>
        }
        ) }
      </ul>
    </nav>
    }
    
  </> 
};

export default Navbar;