import "./modal.css";
import CrossWhite from "/img/cross-white.svg"
import CrossDark from "/img/cross-dark.svg"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Modal = ({children, setModalActive}) => {
  
  const {Theme} = useContext(ThemeContext)
  
  const CloseModal = () => setModalActive(false); 

  return <div className="modal">
      <div className="modal-window">
        <div className="close-modal-btn" >
          {Theme === 'dark' ? <img src={CrossWhite} alt="" onClick={CloseModal}/> : <img src={CrossDark} alt="" onClick={CloseModal}/>}
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>;
};

export default Modal;