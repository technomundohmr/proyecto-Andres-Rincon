import { useEffect } from "react";
import { useRequest } from "../../hooks/useRequest";
import "./footer-menu.css";

const FooterMenu = () => {
 
  const {ResponseData, setSendRequest} = useRequest('menu-items/footer/portfolio', 'get');

  useEffect(() => {
    setSendRequest(true);
  }, [])

  const baseUrl = import.meta.env.VITE_BACKEND_URL
 
  return <div className="footer-menu">
    <nav>
      <ul>
        {ResponseData && Object.entries(ResponseData).map((data) => {
          let {icon, id, path, target, name} = data[1];
          return <a key={id} href={path} target={target}>
            <li>
              <img src={baseUrl + icon} alt={name} />
            </li>
          </a>
        })}
      </ul>
    </nav>
  </div>;
};

export default FooterMenu;