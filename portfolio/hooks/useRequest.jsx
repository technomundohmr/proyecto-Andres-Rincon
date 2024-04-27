import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useRequest = (path='', method='get', body={}, headers) => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL;
    const [Data, setData] = useState({})
    useEffect(() => {
        if (method == 'get') {    
            axios.get(baseUrl + path , headers).then((response) => setData(response.data))
        } else {
            axios.post(baseUrl + path , body, headers).then((response) => setData(response.data))
        }
        
    }, [])
    

  return Data
}

export default useRequest