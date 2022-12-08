import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { addFav } from "../Components/utils/Storage";

import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';

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
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img src="./images/doctor.jpg" alt="Doctor" className="img"/>
        <Link to={`/dentist/${id}`}>{name}nombre</Link>
        <h4>{username}</h4>
        <button onClick={handleClick} className="favButton">⭐ Add fav</button>
      </Paper>
    </Grid>
  );
};

export default Card;
