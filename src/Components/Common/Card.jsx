import React, { useState, useEffect } from "react";

import { addFav } from "../utils/Storage";

import Grid from '@mui/material/Unstable_Grid2';
import { Button, Link, Typography } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Stack from '@mui/material/Stack';

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
    <Grid 
      item 
      xs={3}
      border={0.5}
      padding={1}
    >
        <img src="./images/doctor.jpg" alt="Doctor" className="img-card"/>
        <Grid 
          container
          flexDirection={'column'}
          justifyContent={'center'}
          borderColor={'secondary'}
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
    </Grid>
  );
};

export default Card;
