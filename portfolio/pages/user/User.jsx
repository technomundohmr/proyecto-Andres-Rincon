import { useState } from "react";
import Card from "../../components/card/Card";
import HeaderH2 from "../../components/headers/HeaderH2";
import NavbarUtils from "../../components/navbar-utils/NavbarUtils";
import "./user.css";


console.log(import.meta.env.VITE_BACKEND_URL);
const User = () => {
  
  const [UserForm, setUserForm] = useState('Register')
  return <div className="user">
    <NavbarUtils />
    <div className="container">
      <HeaderH2 header={UserForm} />
      <Card>
      </Card>
    </div>
  </div>;
};

export default User;