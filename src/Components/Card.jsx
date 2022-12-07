import React from "react";
import { Link } from "react-router-dom";
import { findRouteByTitle } from "../Routes/AllRoutes";


const Card = ({ name, username, id }) => {


  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }
  
  return (
    <div className="card">
      <img src="./images/doctor.jpg" alt="Doctor" className="card-img"/>
      <Link to={findRouteByTitle('DentistBy').path + id}>{id} - {name}</Link>
      <h4>{username}</h4>
      <button onClick={addFav} className="favButton">⭐ Add fav</button>
    </div>
  );
};

export default Card;
