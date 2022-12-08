import axios from 'axios'
import React, { useEffect } from 'react'
import { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Home = () => {

  const { data, setData } = useContext(ContextGlobal);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setData(res.data));
  }, []);

  return (
    <main className="">
      <h1>Home</h1>
      <div className='card-grid'>
        {
          data.map((item) => {
            return <Card name={item.name} username={item.username} id={item.id} key={item.id} />
          })
        }
      </div>
    </main>
  )
}