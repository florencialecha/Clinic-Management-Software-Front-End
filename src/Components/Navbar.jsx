import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { navBar } from '../Routes/NavBarItems'

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


import RestoreIcon from '@mui/icons-material/Restore';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
/* TODO: Estilos para el logo DH Odonto */
/* TODO:Deberan implementar ademas la logica para cambiar de Theme con el button */

const Navbar = () => {
  

  return (
    <nav>
      <Box>
          <Link label={'Index'}>DH Odonto</Link>
          <ul>
            <li>
              {navBar.map((item) => (
                <BottomNavigationAction 
                  key={item.id} 
                  label={item.label} 
                  href={item.path} 
                  icon={item.Icon} 
                  showLabel={true}
                />
              ))}
            </li>
          </ul>
          <button>🌙</button>
      </Box>
    </nav>
  )

}

export default Navbar