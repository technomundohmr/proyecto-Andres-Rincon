import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const useRequest = (path='', method='get', body, headers) => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL;
    const [ResponseData, setResponseData] = useState({})

    useEffect(() => {
        if (method == 'get') {    
            axios.get(baseUrl + path , headers).then(response => setResponseData(response.data)).catch(error => setResponseData(error))
        } else {
            body && axios.post(baseUrl + path , body, headers).then(response => setResponseData(response.data)).catch(error => setResponseData(error))
        }
        
    }, [path, method, headers, body])


    

    return {
        ResponseData,
    }
}
