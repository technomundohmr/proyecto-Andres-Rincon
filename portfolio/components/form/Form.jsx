import "./form.css";
import FormItem from "../../components/form-item/FormItem";
import Alert from "../../components/alert/Alert";
import {useForm} from 'react-hook-form'
import { useEffect, useState } from "react";
import {useRequest} from "../../hooks/useRequest.js";


const Form = ({FormData, dataValidation, submitValue, path, method, setResult}) => {
  
  const [AlertData, setAlertData] = useState();

  const {register, handleSubmit, watch, formState:{errors}} = useForm(); 

  const [Data, setData] = useState()

  const { ResponseData } = useRequest(path, method, Data);
  
  useEffect(() => {
    if(ResponseData?.response?.status == 403){
      setAlertData({
        status: 'error',
        message: 'No tienes permisos para crear este usuario' 
      });
    } else if(ResponseData?.status == 'success'){
      setAlertData(ResponseData);
      setResult(ResponseData);
    }

  }, [ResponseData])
  
  const submitHandler = handleSubmit((data) => {
    const result = dataValidation(data);
    if(result) {
      setAlertData(result);
    } else {
      setAlertData(null)
      setData(data);
    }
    return ResponseData;
  })

  return <form onSubmit={submitHandler} className="form">       

          {AlertData?.message && <Alert status={AlertData.status} message={AlertData.message} 
          setAlertData={setAlertData}/> }
          
          {FormData.map(({name, type, id, placeholder, validations, label}) => <FormItem label={label} name={name} type={type} placeholder={placeholder} id={id} key={id} register={register} validations={validations} errors={errors}/> )}
          
          <FormItem type="submit" value={submitValue} />

    </form>;
};

export default Form;