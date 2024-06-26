import "./form-item.css";

const FormItem = ({
  label,
  description,
  placeholder,
  type = 'text',
  classes = '',
  name = '',
  errors,
  id,
  value,
  setValue,
}) => {

  return <div className={`form-item ${classes}`}>
    {label && <label htmlFor={name}>{label}</label>}

      <input 
        type={type} 
        placeholder={placeholder} 
        name={name} 
        id={id} 
        {...register(name, validations)}
        className={errors[name] ? 'error' : ''}
      /> 
      {errors[name] &&  <span>{errors[name].message}</span> }
    {description && <p>{description}</p> }
  </div>;
};

export default FormItem;