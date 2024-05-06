import { useState } from "react";
import { AdminMenuData } from "../../global/MenuData";
import Modal from "../modal/Modal";
import "./menus.css";
import MenuAdminForm from "../form/AdminForms/MenuAdminForm";
import MenuTechnologiesForm from "../form/AdminForms/MenuTechnologiesForm";

const AdminMenu = () => {

  const [ModalState, setModalState] = useState()

  const ModalStateHandler = (id, name) => setModalState({
    active: true,
    form: id,
    name
  })
  return <>
    <div className="admin-menu">
        <nav>
          <ul>
            {AdminMenuData.map(({id, icon, name, color, to}) => <li onClick={() => ModalStateHandler(id, name)} className={color} key={id}>
              <a href={to}><img src={icon} alt={name} /></a>
            </li> ) }
          </ul>
        </nav>    
      </div>
      {ModalState?.active && <Modal setModalActive={setModalState} >
        {ModalState?.form === 'menuConfig' && <MenuAdminForm name={ModalState.name} classesHeader={'block'}/>}
        {ModalState?.form === 'technologyConfig' && <MenuTechnologiesForm name={ModalState.name} classesHeader={'block'}/>}
      </Modal>}
  </> 
};

export default AdminMenu;