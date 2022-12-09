import React from 'react'
import { Link } from 'react-router-dom'
import { navBar } from '../../Routes/NavBarItems'

import AppBar from'@mui/material/AppBar'
import Box from '@mui/material/Box';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';

import { IconButton } from "@mui/material";
import { Brightness4 as LightIcon } from "@mui/icons-material";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
/* TODO: Estilos para el logo DH Odonto */
/* TODO:Deberan implementar ademas la logica para cambiar de Theme con el button */

const Navbar = () => {

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <ListItem>
          <Box>
            <Link to={'/Home'}>DH Odonto</Link>
          </Box>
          <Box>
            {navBar.map((item) => (
              <BottomNavigationAction 
                key={item.id} 
                label={item.label} 
                href={item.path} 
                icon={item.Icon} 
                showLabel={true}
              />
            ))}

            <IconButton sx={{ ml: 1 }} color="inherit">
              <LightIcon />
            </IconButton>

            {/* <ToggleButtonGroup>
              <ToggleButton value='dark'>
                <DarkModeIcon />
              </ToggleButton>
              <ToggleButton value='light'>
                <LightModeIcon />
              </ToggleButton>
            </ToggleButtonGroup>     */}

          </Box>
        </ListItem>
      </Toolbar>
    </AppBar>
  )

}

export default Navbar