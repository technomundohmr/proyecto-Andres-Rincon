import {UserContext} from '../context/UserContext';
import { useEffect, useState } from 'react';
import { useRequest } from '../hooks/useRequest.js';

export const UserProvider = ({children}) => {

    const [IsThereAdmin, setIsThereAdmin] = useState();
    const { ResponseData }= useRequest( 'admin-check' , 'get');

    useEffect(() => {
        setIsThereAdmin(ResponseData)
    }, [ResponseData])
    
    return (
        <UserContext.Provider value={ IsThereAdmin }>
            {children}
        </UserContext.Provider>
    )
}