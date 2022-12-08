import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getFavs } from "../Components/utils/Storage";

import Card from "../Components/Card";

export const Favs = () => {

  const [ favs, setFavs ] = useState([]);

  useEffect(() => {
    setFavs(getFavs());
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {
          favs.map((fav) => <Card name={fav.name} username={fav.username} id={fav.id} kay={fav.id} />)
        }
      </div>
    </>
  );
};
