import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer>
      <button onClick={() => navigate("/")}>Volver al principio</button> 
      <div className='container-icons'>
        <img src="./images/DH.png" alt='DH-logo' />
        <img src='./images/ico-facebook.png' alt="Icono de Facebook"/>
        <img src="./images/ico-instagram.png" alt="Icono de Instagram"/>
        <img src="./images/ico-whatsapp.png" alt="Icono de Whatsapp"/>
        <img src="./images/ico-tiktok.png" alt="Icono de Tiktok"/>
      </div>
    </footer>
  )
}

export default Footer
