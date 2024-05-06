import {UserContext} from '../context/UserContext';
import { useEffect, useState } from 'react';
import { useRequest } from '../hooks/useRequest.js';

export const UserProvider = ({children}) => {

    const [IsThereAdmin, setIsThereAdmin] = useState();
    const { ResponseData, setSendRequest }= useRequest( 'admin-check' , 'get');
    const [User, setUser] = useState({})

    useEffect(() => {
        setSendRequest(true);
    }, [])
    

    useEffect(() => {
        setIsThereAdmin(ResponseData)
    }, [ResponseData])
    
    return (
        <UserContext.Provider value={{IsThereAdmin , User, setUser}}>
            {children}
        </UserContext.Provider>
    )
}