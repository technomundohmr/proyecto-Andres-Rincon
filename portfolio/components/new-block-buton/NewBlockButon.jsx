import { useContext, useState } from "react";
import "./new-block-buton.css";
import Plus from '/img/plus.svg';
import Modal from "../modal/Modal";
import HeaderH2 from "../headers/HeaderH2";
import OptionForm from "../form-item/OptionForm";
import { ThemeContext } from "../../context/ThemeContext";
import { BlockTypesOptions } from "../../global/FormData";

const NewBlockButon = () => {

  const [ModalActive, setModalActive] = useState(false)
  const setModalHandler = () => setModalActive(true)
  const blockTypes = BlockTypesOptions
  const [BlockType , setBlockType ] = useState()
  const {Theme} = useContext(ThemeContext)

  return <>
    <div className="new-block-buton" onClick={setModalHandler}>
      <div className="new-block-buton-content">
        <img src={Plus} alt="plus buton" />
        <h4>Crear un nuevo bloque</h4>
      </div>
    </div>
    {ModalActive && <Modal setModalActive={setModalActive} >
      <HeaderH2 header={'Creación de bloque'} classes="block"/>
      <OptionForm name="block-type"  options={blockTypes}  setValue={setBlockType}/>
    </Modal> }
  </>
};

export default NewBlockButon;