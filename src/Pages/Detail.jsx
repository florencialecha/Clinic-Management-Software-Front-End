import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Grid from '@mui/system/Unstable_Grid';
import { Container, Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableRow, Typography } from '@mui/material';
import { Stack } from '@mui/system';

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

  const tableData = [
    {label: "Name", value: name},
    {label: "Email", value: email},
    {label: "Phone", value: phone},
    {label: "Website", value: website},
  ]

  return (
      <Stack alignItems="center" paddingY={4} spacing={3}>
        <Typography variant={'h3'} align="center">
          Dentist Detail
        </Typography>
        <Stack sx={{maxWidth: 600, p: 3, borderStyle: 'solid', borderWidth: 1, borderColor: 'lightgray'}} spacing={3} alignItems="center">
          <img src="../../images/doctor.jpg" alt="Doctor" className="img-card" style={{maxWidth: 300, width: '100%'}} />
          <TableContainer component={Paper} sx={{maxWidth: 600}}>
          <Table sx={{ minWidth: 200 }} aria-label="simple table">
            <TableBody>
              {tableData.map((row) => (
                <TableRow
                  key={row.label}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <Typography color='secondary' variant='button'>
                      {row.label}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography color='secondary' variant='normal'>
                      {row.value}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  )
}
