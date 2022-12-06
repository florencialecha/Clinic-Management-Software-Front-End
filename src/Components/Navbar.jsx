import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <div className='container'>
        {/* TODO: Estilos para el logo DH Odonto */}
        <Link to="/">DH Odonto</Link>
      </div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/favs">Favs</Link>
        </li>
      </ul>
      {/* TODO:Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>🌙</button>
    </nav>
  )
}

export default Navbar