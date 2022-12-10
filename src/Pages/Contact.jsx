import React from 'react'
import Form from '../Components/Common/Form'

import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { red } from '@mui/material/colors';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Contact = () => {
  return (
    <Stack
      spacing={5}
      padding={8} 
      margin={16}
    >
      <Paper 
        variant="outlined"
        borderColor={red}
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
    </Stack>
  )
}