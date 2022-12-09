import React from 'react'
import Form from '../Components/Form'

import Grid from '@mui/system/Unstable_Grid';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Contact = () => {
  return (
    <Grid>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </Grid>
  )
}