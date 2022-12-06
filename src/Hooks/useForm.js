import { useState } from "react";

const useForm = (successCallback, errorCallback) => {
    
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const validate = (name, value) => {
        switch (name) {
            case "fullName":
                if (value.length <= 5) {
                    setErrors({
                        ...errors,
                        [name]: "Full name must be at least 5 characters long",
                    });
                } else {
                    delete errors[name];
                }
                break;
            case "email":
                const emailRegExp = new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                if (!emailRegExp.test(value)) {
                    setErrors({
                        ...errors,
                        [name]: "Invalid email format",
                    })
                } else {
                    delete errors[name];
                }
                break;
            default:
                break;
        }
    }

    const handleChange = (event) => {
        event.preventDefault();
        
        const name = event.target.name;
        const value = event.target.value;

        validate(name, value);

        setValues({
            ...values,
            [name] : value,
        });

        console.log(values, errors);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            successCallback();
        } else {
            errorCallback();
        }
    }

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
    };

}

export default useForm;