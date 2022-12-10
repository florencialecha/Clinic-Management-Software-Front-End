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
    <>
      <Typography variant={'h3'}>
        Home
      </Typography>
      <Grid container spacing={3} paddingY={8}>
          {
            data.map((item) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Card name={item.name} username={item.username} id={item.id} key={item.id} />
                </Grid>
              )
            })
          }
      </Grid>
    </>
  )
}