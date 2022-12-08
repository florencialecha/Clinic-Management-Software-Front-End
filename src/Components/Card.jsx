import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { findRouteByTitle } from "../Routes/AllRoutes";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Card = ({ id, name, username }) => {

  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const existingValue = localStorage.getItem('Dentist')
    if (existingValue !== null) {
      setFavs(existingValue);
    }
  }, [favs]); 


  const addFav = () => {
    setFavs({id, name, username})
    localStorage.setItem('Dentist', JSON.stringify(favs));
    console.log('Debería renderizar' + favs);
  }
  

  return (
    <div className="card">
      <img src="./images/doctor.jpg" alt="Doctor" className="card-img"/>
      <Link to={findRouteByTitle('DentistBy').path + id}>{id} - {name}</Link>
      <h4>{username}</h4>
      <button onClick={addFav(id, name, username)} className="favButton">⭐ Add fav</button>
    </div>
  );
};

export default Card;
