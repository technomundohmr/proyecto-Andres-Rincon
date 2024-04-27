import { useContext, useEffect, useState } from "react";
import Card from "../../components/card/Card";
import HeaderH2 from "../../components/headers/HeaderH2";
import NavbarUtils from "../../components/navbar-utils/NavbarUtils";
import "./user.css";
import { UserContext } from "../../context/UserContext";
import { LoginFormData, RegisterFormData } from "../../global/FormData";
import FormItem from "../../components/form-item/FormItem";
import {useForm} from 'react-hook-form'

const User = () => {
  
  const [UserForm, setUserForm] = useState(RegisterFormData)
  const [FormData, setFormData] = useState({header: 'registro', submit: 'Registrarme'});
  
  const {IsThereAdmin} = useContext(UserContext);

  const {register} = useForm(); 

  useEffect(() => {
    IsThereAdmin ? setUserForm(LoginFormData) : setUserForm(RegisterFormData) 
    IsThereAdmin ? setFormData({header: 'Ingreso', submit: 'Ingresar'}) : setFormData({header: 'registro', submit: 'Registrarme'}) 
  }, [])

  return <div className="user">
    <NavbarUtils />
    <div className="container">
      <HeaderH2 header={FormData.header} />
      <Card>
        <form >          
          {UserForm.map(({name, type, id, placeholder, }) => <FormItem name={name} type={type} placeholder={placeholder} id={id} key={id} /> )}
          <FormItem type='submit' value={FormData.submit} name='submit'/>
        </form>
      </Card>
    </div>
  </div>;
};

export default User;