import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const useRequest = (path='', method='get', body, headers) => {
    const baseUrl = `${import.meta.env.VITE_BACKEND_URL}api/`;
    const [ResponseData, setResponseData] = useState({})
    const [SendRequest, setSendRequest] = useState(false)
    if(localStorage.getItem('token')){
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    }
    useEffect(() => {
        if(SendRequest == true) {
            if (method == 'get') {    
                axios.get(baseUrl + path , headers).then(response => setResponseData(response.data)).catch(error => setResponseData(error))
            } else {
                body && axios.post(baseUrl + path , body, headers).then(response => setResponseData(response.data)).catch(error => setResponseData(error))
            }
        }    
        setSendRequest(false)
    }, [SendRequest])


    

    return {
        setSendRequest,
        ResponseData,
    }
}
