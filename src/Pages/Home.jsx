import React from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Home = () => {
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        <Card id={2} name={'Flor'} username={'Flecha'}/>
      </div>
    </main>
  )
}