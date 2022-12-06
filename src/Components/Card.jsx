import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username}) => {

// - La grilla deberá mostrar una [Card](/src/Components/Card.jsx) por cada dentista devuelto por la API.
// - Cada dentista deberá contener `name` y `username`, junto con un boton `ADD FAV` (para agregar al localStorage como fav) y un `link` que permita su navegacion a la pagina _dentist/:id_ en base al id del dentista.
// - Cada Card debe integrar la funcionalidad de agregar a destacados

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  let id = 2;
  return (
    <div className="card">
      <img src="./images/doctor.jpg" alt="Doctor" className="card-img"/>
      <Link to={'/dentist/$id'}>{name}nombre</Link>
      <h4>{username}</h4>

        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐ Add fav</button>
    </div>
  );
};

export default Card;
