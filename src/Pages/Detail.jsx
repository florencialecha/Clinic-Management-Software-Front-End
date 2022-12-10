import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Grid from '@mui/system/Unstable_Grid';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();

  const [ data, setData ] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setData(res.data))
  }, []);

  if (!data) {
    return;
  }

  const { name, email, phone, website } = data;

  return (
      <Grid>
        <h1>Detail Dentist {id}</h1>
        <h3>{ name }</h3>
        <h3>{ email }</h3>
        <h3>{ phone }</h3>
        <h3>{ website }</h3>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </Grid>
  )
}
