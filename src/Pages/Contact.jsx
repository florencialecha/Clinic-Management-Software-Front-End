import React from 'react'
import Form from '../Components/Common/Form'

import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { red } from '@mui/material/colors';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Contact = () => {
  return (
    <Grid
      container 
      padding={8} 
      direction={'column'}
      margin={16}
    >
      <Paper 
        variant="outlined"
        margin={10}
      >
        <Typography 
          variant={'h3'}
        >
          Want to know more?
        </Typography>
        <Typography
          variant={'h5'}
        >
          Send us your questions and we will contact you
        </Typography>
        <Form/>
      </Paper>
    </Grid>
  )
}