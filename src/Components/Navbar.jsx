import React from 'react'
import { Link } from 'react-router-dom'
import { navBar } from '../Routes/Routes'

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
          {navBar.map(({ id, path, title }) => (<Link key={id} to={path}>{title}</Link>))}
        </li>
      </ul>
      {/* TODO:Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>🌙</button>
    </nav>
  )
}

export default Navbar