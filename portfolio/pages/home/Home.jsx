import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import { useRequest } from "../../hooks/useRequest";
import NewBlockButon from "../../components/new-block-buton/NewBlockButon";
import AdminMenu from "../../components/menus/AdminMenu";
import FooterMenu from "../../components/footer-menu/FooterMenu";

const Home = () => {

  const [UserToken, setUserToken] = useState()
  const {ResponseData, setSendRequest} = useRequest(UserToken)

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setSendRequest(true)
      setUserToken('user', 'get', {} , {Authorization: `Bearer ${localStorage.getItem('token')}
      `})
    }
  }, [])

  return <>
    <Navbar />
    <FooterMenu />
    {(ResponseData.role === 'admin') &&  <>
        <NewBlockButon /> 
        <AdminMenu />
      </> 
    }
    

  </>;
};

export default Home;