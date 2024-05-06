import { useEffect, useState } from "react"

export const useSetUploadFormData = (form = [], entity) => {
  
    const [UpdateFormData, setUpdateFormData] = useState()

    useEffect(() => {
        let formData = []
        entity && form.map(formItem => {
            Object.keys(entity).map(key => {
                if(key !== 'id'){
                    if(formItem.name === key) {

                        formData = [{...formItem, value:entity[key]}, ...formData]
                    }
                }
            })
        })
        setUpdateFormData(formData);
    }, [entity])
    
    return {UpdateFormData}
}
