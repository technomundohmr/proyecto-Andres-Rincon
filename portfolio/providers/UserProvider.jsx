import {UserContext} from '../context/UserContext';
import { useState } from 'react';
import useRequest from '../hooks/useRequest';

export const UserProvider = ({children}) => {

    const IsThereAdminData = useRequest( 'admin-check' );

    const [IsThereAdmin, setIsThereAdmin] = useState(0);

    return (
        <UserContext.Provider value={{ IsThereAdmin }}>
            {children}
        </UserContext.Provider>
    )
}