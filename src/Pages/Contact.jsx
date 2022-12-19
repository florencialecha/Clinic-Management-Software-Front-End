import React from 'react'
import Form from '../Components/Common/Form'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Contact = () => {
  return (
    <Stack
      spacing={3}
      paddingX={8} 
      marginY={4}
    >
      <Typography 
        variant={'h3'}
        color='secondary'
      >
        Want to know more?
      </Typography>
      <Typography
        variant={'h5'}
        color='secondary'
      >
        Send us your questions and we will contact you
      </Typography>
      <Form/>
    </Stack>
  )
}