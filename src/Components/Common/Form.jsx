import { Button, Input, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useState } from "react";
import useForm from "../../Hooks/useForm";

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
        <Stack spacing={3}>
          <TextField inputProps={{style: {color: 'secondary'}}} variant="outlined" color="secondary" type="text" name="fullName" placeholder="Full name" onChange={handleChange} role="fullName"></TextField>
          <TextField variant="outlined" color="secondary" type="email" name="email" placeholder="Email" onChange={handleChange} role="email"></TextField>
          <Button type="submit" value="Submit" color="secondary" size="large" variant="red-button">
            <Typography variant="h5">Send</Typography>
          </Button>
          <Typography variant="subtitle" color="secondary">
            {submitMessage && <p>{submitMessage}</p>}
          </Typography>
        </Stack>
      </form>
    </div>
  );
  
};

export default Form;
