import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { findRouteByTitle } from "../Routes/AllRoutes";

import { addFav } from "../Components/utils/Storage";

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
    <div className="card">
      <img src="./images/doctor.jpg" alt="Doctor" className="card-img"/>
      <Link to={`/dentist/${id}`}>{name}nombre</Link>
      <h4>{username}</h4>
      <button onClick={handleClick} className="favButton">⭐ Add fav</button>
    </div>
  );
};

export default Card;
