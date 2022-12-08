import React from "react";
import { useEffect } from "react";
import { useState } from "react";


export const Favs = () => {

  /*const [ favs, setFavs ] = useState([]);

  useEffect(() => {

  });*/

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};
