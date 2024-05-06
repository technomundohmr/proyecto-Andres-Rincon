import { useContext, useState } from "react"
import HeaderH2 from "../../headers/HeaderH2"
import { TechnologyFormData } from "../../../global/FormData"
import { ThemeContext } from "../../../context/ThemeContext"
import Form from "../Form"
import { useRequest } from "../../../hooks/useRequest"
import ItemActionEntity from "../../item-action-entity/ItemActionEntity"
import { useEffect } from "react"
import Modal from "../../modal/Modal"
import { useSetUploadFormData } from "../../../hooks/useSetUploadFormData"
import ItemUpdateEntity from "../../item-update-entity/ItemUpdateEntity"

const MenuTechnologiesForm = ({name, classesHeader}) => {

    const {Theme} = useContext(ThemeContext)
    const [Result, setResult] = useState()
    const [UpdateItem, setUpdateItem] = useState()
    const [UpadateItemForm, setUpadateItemForm] = useState()
    const {ResponseData, setSendRequest} = useRequest('technologies', 'get', Result)

    useEffect(() => {
      setSendRequest(true);
    }, [Result])
    
    useEffect(() => {
      UpdateItem && setUpadateItemForm(ResponseData.find(ResponseData => ResponseData.id === UpdateItem))
    }, [UpdateItem])

    
  return (
    <>
      <div>
        <HeaderH2 header={name} classes={classesHeader}/>
        <Form  formItemClasses={Theme} dataValidation={()=>false} FormFieldsData={TechnologyFormData} submitValue='Crear' path='technology/create' method='post' setResult={setResult}/>
        {Object.keys(ResponseData).map(key => {
          let {id, name} = ResponseData[key]
          return <ItemActionEntity key={id} name={name} entity={'technology'} id={id} changeState={setSendRequest} setUpdateItem={setUpdateItem}/>
        })}
      </div>
    {UpadateItemForm && <ItemUpdateEntity entity='technology' UpadateItemForm={UpadateItemForm} classesHeader={classesHeader} FormData={TechnologyFormData} setUpadateItemForm={setUpadateItemForm} setRequestResult={setSendRequest} setUpdateItem={setUpdateItem}/> }
    </>
  )
}

export default MenuTechnologiesForm