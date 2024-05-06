import "./form-item.css";

const OptionForm = ({
  label,
  description,
  placeholder='selecione una opción',
  classes = '',
  name = '',
  errors,
  id,
  value,
  options = [],
  setValue
}) => {

  const setValueManager = ({target}) => {
    setValue(target.value)
  }
  return <div className={`form-item ${classes}`}>
    {label && <label htmlFor={name}>{label}</label>}
        <select name={name} id={id} onChange={setValueManager}>
            {value ? <option value={value.value}>{value.label}</option> : <option value="" disabled>{placeholder}</option>}
            {options.map(option => <option key={option.value} value={option.value}>{option.label}</option> )}
        </select>  
    {description && <p>{description}</p> }
  </div>;
};

export default OptionForm;