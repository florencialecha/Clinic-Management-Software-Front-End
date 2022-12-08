import React from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Home = (data) => {
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}

        {/* {data.map((dentist) => {
          return (<Card key={dentist.id} id={dentist.id} name={dentist.name} username={dentist.username} />)
          })
        } */}

      <Card key={2} id={2} name={'Florencia'} username={'Flecha'} />

      </div>
    </main>
  )
}