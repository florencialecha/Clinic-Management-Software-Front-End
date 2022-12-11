import { useState } from "react";

const useForm = (submitCallback) => {
    
    const [values, setValues] = useState({});

    const handleChange = (event) => {
        event.preventDefault();
        
        const name = event.target.name;
        const value = event.target.value;

        setValues({
            ...values,
            [name] : value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        submitCallback();
    }

    return {
        values,
        handleChange,
        handleSubmit,
    };

}

export default useForm;