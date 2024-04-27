import "./form-item.css";
import {useForm} from 'react-hook-form'

const FormItem = ({
  label,
  description,
  placeholder,
  type = 'text',
  classes = '',
  name = '',
  errors,
  id,
}) => {
  
  const {register} = useForm(); 


  const valueHandler = ({target}) => {
    setValue({...formState, [target.name]:{...formState[target.name] , value: target.value}})
  }

  return <div className={`form-item ${classes}`}>
    {label && <label htmlFor={name}>{label}</label>}
    <input 
      type={type} 
      placeholder={placeholder} 
      name={name} 
      id={id} 
      className={errors ? 'error' : ''}
      {...register(name)}
    />
    
    {description && <p>{description}</p> }
  </div>;
};

export default FormItem;