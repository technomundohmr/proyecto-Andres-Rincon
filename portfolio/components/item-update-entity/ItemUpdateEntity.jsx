import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./item-update-entity.css";
import Modal from "../modal/Modal";
import HeaderH2 from "../headers/HeaderH2";
import { useSetUploadFormData } from "../../hooks/useSetUploadFormData";
import Form from "../form/Form";
import { useEffect } from "react";

const ItemUpdateEntity = ({entity, classesHeader, UpadateItemForm, FormData, setUpadateItemForm, setRequestResult, setUpdateItem}) => {

  const {Theme} = useContext(ThemeContext)
  const [Result, setResult] = useState()
  const {UpdateFormData} = useSetUploadFormData(FormData, UpadateItemForm);

  useEffect(() => {
    if (Result?.status === 'success'){
      setUpadateItemForm(false)
      setRequestResult(true)
      setUpdateItem(false)
    } 
  }, [Result])

  const closeModalHandler = () => {
    setUpdateItem(false)
    setRequestResult(true)
    setUpadateItemForm(false)
  }
  

  return UpdateFormData && <Modal setModalActive={closeModalHandler}>
      <HeaderH2 header={`Edición de tecnología "${UpadateItemForm.name}"`} classes={classesHeader}/>
      <Form  formItemClasses={Theme} dataValidation={()=>false} FormFieldsData={UpdateFormData} submitValue='Actualizar' path={`${entity}/${UpadateItemForm.id}/edit`} method='post' methodFlag='put' setResult={setResult}/>
    </Modal>
};

export default ItemUpdateEntity;