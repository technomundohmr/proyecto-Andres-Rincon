import { useContext, useEffect, useState } from "react"
import HeaderH2 from "../../headers/HeaderH2"
import OptionForm from "../../form-item/OptionForm"
import { MenuItemFormData, MenuTypes } from "../../../global/FormData"
import { ThemeContext } from "../../../context/ThemeContext"
import Form from "../Form"
import { useRequest } from "../../../hooks/useRequest"
import ItemActionEntity from "../../item-action-entity/ItemActionEntity"
import ItemUpdateEntity from "../../item-update-entity/ItemUpdateEntity"

const MenuAdminForm = ({name, classesHeader}) => {

    const [MenuType, setMenuType] = useState('main')
    const {Theme} = useContext(ThemeContext)
    const [Result, setResult] = useState(true)
    const [UpdateItem, setUpdateItem] = useState()
    const [UpadateItemForm, setUpadateItemForm] = useState()
    const {ResponseData, setSendRequest} = useRequest(`menu/${MenuType}/portfolio/`, 'get', Result)

    useEffect(() => {
      setSendRequest(true);
    }, [Result, MenuType])

    useEffect(() => {
      UpdateItem && setUpadateItemForm(ResponseData.find(ResponseData => ResponseData.id === UpdateItem))
    }, [UpdateItem])

    const [OrderedMenu, setOrderedMenu] = useState()

    useEffect(() => {
      if (ResponseData) {
        const orderedArr = Object.entries(ResponseData).sort((a, b) => a[1].weight - b[1]. weight);
        setOrderedMenu(orderedArr);
      } 
    }, [ResponseData])
    
  return (
    <div>
        <HeaderH2 header={name} classes={classesHeader}/>

        <OptionForm options={MenuTypes} setValue={setMenuType} classes={Theme} />
        {MenuType === 'main' && <Form dataValidation={()=>false} formItemClasses={Theme} FormFieldsData={MenuItemFormData} submitValue='Crear' path='menu/main/portfolio/create' method='post' setResult={setResult}/>}

        {MenuType === 'footer' && <Form dataValidation={()=>false} formItemClasses={Theme} FormFieldsData={MenuItemFormData} submitValue='Crear' path='menu/footer/portfolio/create' method='post' setResult={setResult}/>}

        {OrderedMenu && OrderedMenu.map(data => {
          let {id, name} = data[1]
          return <ItemActionEntity key={id} name={name} entity={'menu-item'} id={id} changeState={setSendRequest} setUpdateItem={setUpdateItem}/>
        })}
        {UpadateItemForm && <ItemUpdateEntity entity='menu-item' UpadateItemForm={UpadateItemForm} classesHeader={classesHeader} FormData={MenuItemFormData} setUpadateItemForm={setUpadateItemForm} setRequestResult={setSendRequest} setUpdateItem={setUpdateItem}/> }
    </div>
  )
}

export default MenuAdminForm