import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getFavs } from "../Components/utils/Storage";

import Card from "../Components/Common/Card";

import Grid from '@mui/system/Unstable_Grid';
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const Favs = () => {

  const [ favs, setFavs ] = useState([]);

  useEffect(() => {
    setFavs(getFavs());
  }, []);

  return (
    <Stack paddingY={4} spacing={2}>
      <Typography variant={'h3'} color="secondary" align="center">
        Dentists Favs
      </Typography>
      <Grid container spacing={3}>
          {
            favs.map((fav) => 
              <Grid key={fav.id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  id={fav.id} 
                  name={fav.name} 
                  username={fav.username} 
                />
              </Grid>
            )
          }
      </Grid>
    </Stack>
  );
};
