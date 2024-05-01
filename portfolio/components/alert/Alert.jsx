import "./alert.css";

const Alert = ({status='', header, message, setAlertData}) => {
  
  const closeAlert = () => setAlertData(null);
  
  return <div className={`alert ${status}`}>
    <div className="alert-body">
      {header && <h4>{header}</h4>}
      <p>{message}</p>
    </div>
    <p className="close-btn" onClick={closeAlert}>X</p>
  </div>;
};

export default Alert;