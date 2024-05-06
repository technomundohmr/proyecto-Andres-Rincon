import "./form.css";
import FormItem from "../../components/form-item/FormItem";
import Alert from "../../components/alert/Alert";
import {useForm} from 'react-hook-form'
import { useEffect, useState } from "react";
import {useRequest} from "../../hooks/useRequest.js";


const Form = ({FormFieldsData, dataValidation, submitValue, path, method, setResult, formItemClasses, methodFlag}) => {
  
  const [AlertData, setAlertData] = useState();

  const {reset, register, handleSubmit, watch, formState:{errors}, setValue} = useForm(); 

  const [Data, setData] = useState()

  const { ResponseData , setSendRequest} = useRequest(path, method, Data);

  useEffect(() => {
    if(ResponseData?.response?.status == 403){
      setAlertData({
        status: 'error',
        message: 'No tienes permisos para crear este usuario' 
      });
    } else if(ResponseData?.status == 'success'){
      setAlertData(ResponseData);
      setResult(ResponseData);
      reset()
    }else if (ResponseData?.status == 'error'){
      setAlertData(ResponseData);
    }

  }, [ResponseData])
  
  const submitHandler = handleSubmit((data) => {
    setSendRequest(true);
    const result = dataValidation(data);
    if(result) {
      setAlertData(result);
    } else {
      const formData = new FormData();
      Object.keys(data).forEach(key=>{
        data[key] instanceof FileList ? formData.append(key, data[key][0]) : formData.append(key, data[key]);
      })
      methodFlag && formData.append('_method', methodFlag)
      setData(formData);
    }
    return ResponseData;
  })

  return <form onSubmit={submitHandler} className="form">       

          {AlertData?.message && <Alert status={AlertData.status} message={AlertData.message} 
          setAlertData={setAlertData}/> }
          
          {FormFieldsData.map(({name, type, id, placeholder, validations, label, accept, value}) => <FormItem label={label} name={name} type={type} placeholder={placeholder} id={id} key={id} register={register} validations={validations} errors={errors} classes={formItemClasses} accept={accept} setValue={setValue} value={value}/> )}
          
          <FormItem type="submit" value={submitValue} />
    </form>;  
};

export default Form;