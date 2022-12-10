import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getFavs } from "../Components/utils/Storage";

import Card from "../Components/Common/Card";

import Grid from '@mui/system/Unstable_Grid';

export const Favs = () => {

  const [ favs, setFavs ] = useState([]);

  useEffect(() => {
    setFavs(getFavs());
  }, []);

  return (
    <Grid>
      <h1>Dentists Favs</h1>
      <Grid container spacing={5}>
        {
          favs.map((fav) => 
            <Card 
              key={fav.id}
              id={fav.id} 
              name={fav.name} 
              username={fav.username} 
            />)
        }
      </Grid>
    </Grid>
  );
};
