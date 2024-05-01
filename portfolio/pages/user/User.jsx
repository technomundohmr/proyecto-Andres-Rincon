import { useContext, useEffect, useState } from "react";
import Card from "../../components/card/Card";
import HeaderH2 from "../../components/headers/HeaderH2";
import NavbarUtils from "../../components/navbar-utils/NavbarUtils";
import "./user.css";
import { UserContext } from "../../context/UserContext";
import { LoginFormData, RegisterFormData } from "../../global/FormData";
import Form from "../../components/form/Form";

const User = () => {
  

  const [UserForm, setUserForm] = useState(RegisterFormData)
  const [FormData, setFormData] = useState({header: 'registro', submit: 'Registrarme'});
  const IsThereAdmin = useContext(UserContext);
  const [Result, setResult] = useState(null);

  useEffect(() => {
    IsThereAdmin?.response ? setUserForm(LoginFormData) : setUserForm(RegisterFormData) 
    IsThereAdmin?.response ? setFormData({header: 'Ingreso', submit: 'Ingresar'}) : setFormData({header: 'registro', submit: 'Registrarme'}) 
  }, [IsThereAdmin])

  const dataValidation = (data) => {
    if(data.password !== data.passwordConfirm){
      setResult({
        status: 'error',
        message: 'Las contraseñas no coinciden'
      })
    }
    return Result
  }

  useEffect(() => {
    if(Result?.status === 'success' ) {
      Result.token && localStorage.setItem('token', Result.token);
      setUserForm(LoginFormData);
      setFormData({header: 'Ingreso', submit: 'Ingresar'})
    }
  }, [Result])

  return <div className="user">
    <NavbarUtils />
    <div className="container">
      <HeaderH2 header={FormData.header} />
      <Card>
        <Form dataValidation={dataValidation} FormData={UserForm} submitValue={FormData.submit} path='create-admin' method='post' setResult={setResult}/>
      </Card>
    </div>
  </div>;
};

export default User;