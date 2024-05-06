import { useContext, useEffect, useState } from "react";
import Card from "../../components/card/Card";
import HeaderH2 from "../../components/headers/HeaderH2";
import NavbarUtils from "../../components/navbar-utils/NavbarUtils";
import "./user.css";
import { UserContext } from "../../context/UserContext";
import { LoginFormData, RegisterFormData } from "../../global/FormData";
import Form from "../../components/form/Form";
import { useNavigate } from 'react-router-dom'

const User = () => {
  
  const navigate = useNavigate()

  const [Result, setResult] = useState(null);

  const dataValidation = (data) => {
    if(data.password !== data.passwordConfirm){
      setResult({
        status: 'error',
        message: 'Las contraseñas no coinciden'
      })
    }
    return Result
  }

  const [UserForm, setUserForm] = useState(RegisterFormData)
  const [FormFieldsData, setFormData] = useState({header: 'registro', submit: 'Registrarme', validate:dataValidation, path:'create-admin'});
  const {IsThereAdmin} = useContext(UserContext);

  useEffect(() => {
    IsThereAdmin?.response ? setUserForm(LoginFormData) : setUserForm(RegisterFormData) 
    IsThereAdmin?.response ? setFormData({header: 'Ingreso', submit: 'Ingresar', validate:() => null, path:'login'}) : setFormData({header: 'registro', submit: 'Registrarme', validate:dataValidation, path:'create-admin'}) 
    localStorage.getItem('token') && navigate('/')
  }, [IsThereAdmin])

  useEffect(() => {
    if(Result?.status === 'success' ) {
      Result.token && localStorage.setItem('token', Result.token);
      setUserForm(LoginFormData);
      setFormData({header: 'Ingreso', submit: 'Ingresar'})
      localStorage.getItem('token') && navigate('/')
    }
  }, [Result])

  return <div className="user">
    <NavbarUtils />
    <div className="container">
      <HeaderH2 header={FormFieldsData.header} />
      <Card>
        <Form dataValidation={FormFieldsData.validate} FormFieldsData={UserForm} submitValue={FormFieldsData.submit} path={FormFieldsData.path} method='post' setResult={setResult}/>
      </Card>
    </div>
  </div>;
};

export default User;