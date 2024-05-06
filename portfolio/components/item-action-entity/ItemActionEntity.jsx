import { useEffect, useState } from "react";
import { useRequest } from "../../hooks/useRequest";
import "./item-action-entity.css";
import RedCross from '/img/cross-red.svg'
import Alert from "../alert/Alert";

const ItemActionEntity = ({name, id, entity, changeState, setUpdateItem}) => {

  const {ResponseData, setSendRequest} = useRequest(`${entity}/delete/${id}` , 'post', {_method: 'delete'});
  const [AlertData, setAlertData] = useState()

  useEffect(() => {
    setAlertData(ResponseData)  
  }, [ResponseData])
  
  const deleteHandler = () => {
    setSendRequest(true)  
    changeState(true)
  }

  const setUpdateItemHandler = () => {
    setUpdateItem(id)
  }

  return <>
    {AlertData?.message && <Alert status={AlertData.status} message={AlertData.message} 
          setAlertData={setAlertData}/> }
    <div className="item-action-entity">
      <div className="body" onDoubleClick={setUpdateItemHandler}>
        <p>{name}</p>
      </div>
      <a href="#" className="delete-btn" onClick={deleteHandler}>
        <img src={RedCross} alt={`delete ${name} ${entity}`} />
      </a>
    </div>
  </>
};

export default ItemActionEntity;