import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from './Routes/Routes'
import { App } from './App'

const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<App/>}>
            {routes.map(({ id, path, Element }) => (<Route key={id} path={path} element={<Element/>}/>))}
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }

export default AppRouter