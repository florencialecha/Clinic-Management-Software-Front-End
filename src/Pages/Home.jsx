import axios from 'axios'
import React, { useEffect } from 'react'
import { useContext } from 'react'
import Card from '../Components/Common/Card'
import { ContextGlobal } from '../Components/utils/global.context'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Home = () => {

  const { data, setData } = useContext(ContextGlobal);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setData(res.data));
  }, []);

  return (
    <Grid>
      <h1>Home</h1>
      <Container>
        <Grid container spacing={5}>
          {
            data.map((item) => {
              return <Card name={item.name} username={item.username} id={item.id} key={item.id} />
            })
          }
        </Grid>
      </Container>
    </Grid>
  )
}