import React, { useState, useEffect } from "react";

import { addFav } from "../utils/Storage";

import Grid from '@mui/material/Unstable_Grid2';
import { Button, Link, Typography } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/system";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Card = ({ id, name, username }) => {

  const handleClick = () => {
    addFav({
      id: id,
      name: name,
      username: username,
    })
  }

  return (
    <Box sx={{p: 1, backgroundColor: 'primary.main', borderWidth: 1, borderColor: 'info.main', borderStyle: 'solid'}}>
      <img src="./images/doctor.jpg" alt="Doctor" className="img-card" style={{width: '100%'}} />
      <Grid
        container
        flexDirection={'column'}
        justifyContent={'center'}
      >
        <Typography align='center'>
          <Link href={`/dentist/${id}`} variant="subtitle" color="secondary">{name}</Link>
        </Typography>
        <Typography variant='subtitile' textAlign={'center'}>
          {username}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<StarBorderIcon />} color={'secondary'} >
            ADD FAV
          </Button>
        </Stack>
      </Grid>
    </Box>
  );
};

export default Card;
