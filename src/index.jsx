import React from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import { Contact } from './Routes/Contact'
import { Detail } from "./Routes/Detail";
import { Favs } from "./Routes/Favs";
import { Home } from "./Routes/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/dentist/:id" element={<Detail/>} />
        <Route path="/favs" element={<Favs/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>

);


