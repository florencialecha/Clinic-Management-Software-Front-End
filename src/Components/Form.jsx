import React from "react";
import { useState } from "react";
import useForm from "../Hooks/useForm";

const Form = () => {

  const [submitMessage, setSubmitMessage] = useState();

  const submitCallback = () => {
    if (validateForm(values)) {
      setSubmitMessage('Thank you ' + values.fullName + ', we will contact you as soon as possible via email.');
    } else {
      setSubmitMessage('Please check your information again.');
    }
  }

  const validateForm = (values) => {
    return validateFullName(values.fullName) && validateEmail(values.email);
  }

  const validateFullName = (value) => {
    if (!value || value.length <= 5) {
      return false;
    }
    return true;
  }

  const validateEmail = (value) => {
    const emailRegExp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!value || !emailRegExp.test(value)) {
      return false;
    }

    return true;
  }

  const { values, handleChange, handleSubmit } = useForm(submitCallback);

  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
        <input type="text" id="fullName" name="fullName" placeholder="Full name" onChange={handleChange} role="fullName" />
        <input type="email" did="email" name="email" placeholder="E-mail" onChange={handleChange} role="email" />
        <button type="submit" value="Submit" className="submit">Send</button>
      </form>
      {submitMessage && <p>{submitMessage}</p>}
    </div>
  );
  
};

export default Form;
