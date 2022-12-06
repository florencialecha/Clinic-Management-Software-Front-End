import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { generalRoutes } from './Routes/GeneralRoutes'
import { App } from './App'

const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<App/>}>
            {generalRoutes.map(({ id, path, Element }) => (<Route key={id} path={path} element={<Element/>}/>))}
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }

export default AppRouter