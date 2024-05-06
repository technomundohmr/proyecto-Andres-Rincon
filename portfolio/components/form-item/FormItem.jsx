import { useEffect, useState } from "react";
import "./form-item.css";
import RedCross from '/img/cross-red.svg'

const FormItem = ({
  label,
  description,
  placeholder,
  type = 'text',
  classes = '',
  name = '',
  errors,
  id,
  register,
  validations={},
  value,
  accept,
  setValue
}) => {

  const [ImageValue, setImageValue] = useState()

  useEffect(() => {
    if(type == 'file' && value) {
      setImageValue(value)
    }
  }, [])
  
  const deleteImageHandler = () => setImageValue(null)

  return <div className={`form-item ${classes}`}>
    {label && <label htmlFor={name}>{label}</label>}
    
    { type === 'submit' ? <input 
      type={type} 
      placeholder={placeholder} 
      name={name} 
      id={id} 
      value={value}
    /> : type=== 'file' ?     <>
      {ImageValue ? 
        <div className="input-image">
          <img src={import.meta.env.VITE_BACKEND_URL + value}/> 
          <a href="#" className="delete-btn" onClick={deleteImageHandler}>
            <img src={RedCross } />
          </a>
        </div>
        : <input 
        type={type} 
        placeholder={placeholder} 
        name={name} 
        id={id} 
        accept={accept} 
        className={errors[name] ? 'error' : ''}
        {...register(name)}
        />
        }
        
      </>  
  : <> {value ? <input 
        type={type} 
        placeholder={placeholder} 
        name={name} 
        id={id} 
        {...register(name, validations)}
        className={errors[name] ? 'error' : ''}
        {...setValue(name ,value)}
      /> : <input 
      type={type} 
      placeholder={placeholder} 
      name={name} 
      id={id} 
      {...register(name, validations)}
      className={errors[name] ? 'error' : ''}
    /> }
      
      {errors[name] &&  <span>{errors[name].message}</span> }
    </> }

    {description && <p>{description}</p> }
  </div>;
};

export default FormItem;