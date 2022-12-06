import React from "react";
import { useState } from "react";
import useForm from "../Hooks/useForm";

const Form = () => {

  const [submitMessage, setSubmitMessage] = useState();

  const successCallback = () => {
    setSubmitMessage('Thank you ' + values.fullName + ', we will contact you as soon as possible via email.');
  }

  const errorCallback = () => {
    setSubmitMessage('Please check your information again.');
  }

  const { values, handleChange, handleSubmit } = useForm(successCallback, errorCallback)

  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full name" onChange={handleChange} />
        <input type="email" name="email" placeholder="E-mail" onChange={handleChange} />
        <button type="submit" value="Submit" className="submit">Send</button>
      </form>
      {submitMessage && <p>{submitMessage}</p>} 
    </div>
  );
  
};

export default Form;
