import axios from 'axios'
import React, { useEffect } from 'react'
import { useContext } from 'react'
import Card from '../Components/Common/Card'
import { ContextGlobal } from '../Components/utils/global.context'

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2';
import { palette } from '@mui/system'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Home = () => {

  const { data, setData } = useContext(ContextGlobal);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setData(res.data));
  }, []);

  return (
    <Grid 
      container 
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typography 
        variant={'h3'}
      >
        Home
      </Typography>
      <Grid 
        container
        xs={12}
        marginTop={4}
        padding={8}
        gap={3}
      >
        {
          data.map((item) => {
            return <Card name={item.name} username={item.username} id={item.id} key={item.id} />
          })
        }
      </Grid>
    </Grid>
  )
}