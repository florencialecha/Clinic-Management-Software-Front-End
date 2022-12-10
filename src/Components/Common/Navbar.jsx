import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { navBar } from '../../Routes/NavBarItems'

import AppBar from'@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';

import { Button, IconButton, Typography, Link } from "@mui/material";
import { LightMode as LightIcon, DarkMode as DarkIcon } from "@mui/icons-material";
import { useContext } from 'react';
import { ContextGlobal } from '../utils/global.context';
import { Box } from '@mui/system';

// Para que empuje el contenido del siguiente elemento y no lo tape.

export const Navbar = () => {

  const { theme, setTheme } = useContext(ContextGlobal);

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

 return (
    <AppBar>
      <Toolbar sx={{my: 1}}>
        <Link component={RouterLink} to="/" underline='none'>
          <Typography variant="logo" color='secondary'>DH ODONTO</Typography>
        </Link>

        <Box sx={{ flexGrow: 1 }}></Box>

        <Box>
          {
            navBar.map((item) => (
              <Link key={item.id} component={RouterLink} to={item.path} underline='none'>
                <Button color='info' sx={{minWidth: 80, ml: 1}} >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {item.Icon}
                    <Typography variant='navbarLink'>{item.label}</Typography>
                  </Box>
                </Button>
              </Link>
            ))
          }
          <IconButton color='info' onClick={switchTheme} sx={{width: 60, height: 60, ml: 1}}>
            { theme === 'light' ? <LightIcon/> : <DarkIcon/> }
          </IconButton>
        </Box>

      </Toolbar>
    </AppBar>
  )

}
