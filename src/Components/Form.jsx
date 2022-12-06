import React from "react";

import useForm from "../Hooks/useForm";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  // ### Pagina 2: Contacto

  // En esta pagina deberán implementar un [Form](/src/Components/Form.jsx) (con sus validaciones pertinentes) que capture la información del usuario que desea contactar con la empresa. Los campos serán los siguientes:

  // - Nombre completo (con longitud mayor a 5)
  // - Email (con formato correcto de email)
  // - En caso de haber un error mostrar el siguiente mensaje de error: **Por favor verifique su información nuevamente**
  // - Una vez "enviado"( no se envía a ningún servidor pero podemos mostrar por consola los datos submiteados) el formulario deberán mostrar un mensaje de éxito que contenga el siguiente formato: **Gracias _[nombre del usuario]_, te contactaremos cuando antes vía mail**

  // Se espera que la página de Contacto, contenga los flujos de validación necesarios (minimo 2 validaciones), para un correcto submit del formulario.

  const successCallback = () => {
    alert("SUCCESS");
    
  }

  const errorCallback = () => {
    alert("ERROR");
  }

  const { values, errors, handleChange, handleSubmit } = useForm(successCallback, errorCallback);

  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full name" onChange={handleChange} />
        <input type="email" name="email" placeholder="E-mail" onChange={handleChange} />
        <button type="submit" value="Submit" className="submit">Send</button>
      </form>
      {/* <p>{ Object.keys(errors).length > 0 && submitMessage() }</p> */}
    </div>
  );
};

export default Form;
