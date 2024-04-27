import "./form-item.css";

const FormItem = ({
  label = false,
  description = false,
  placeholder = false,
  type = 'text',
  classes = '',
  name,
  errors = false,
  id,
}) => {
  return <div className={`form-item ${classes}`}>
    {label && <label htmlFor={name}>{label}</label>}
    <input type={type} placeholder={placeholder} name={name} id={id} className={errors ? 'error' : ''}/>
    {description && <p>{description}</p> }
  </div>;
};

export default FormItem;