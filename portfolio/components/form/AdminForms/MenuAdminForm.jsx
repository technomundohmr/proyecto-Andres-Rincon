import { useContext, useState } from "react"
import HeaderH2 from "../../headers/HeaderH2"
import OptionForm from "../../form-item/OptionForm"
import { MenuItemFormData, MenuTypes } from "../../../global/FormData"
import { ThemeContext } from "../../../context/ThemeContext"
import Form from "../Form"

const MenuAdminForm = ({name, classesHeader}) => {
    const [MenuType, setMenuType] = useState()
    const {Theme} = useContext(ThemeContext)
    const [Result, setResult] = useState()
  return (
    <div>
        <HeaderH2 header={name} classes={classesHeader}/>

        <OptionForm options={MenuTypes} setValue={setMenuType} classes={Theme} />
        {MenuType === 'main' && <Form dataValidation={()=>false} FormFieldsData={MenuItemFormData} submitValue='Registrar' path='menu/create' method='post' setResult={setResult}/>}
        
    </div>
  )
}

export default MenuAdminForm