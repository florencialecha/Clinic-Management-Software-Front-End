import React from 'react'

import { footer } from '../../Routes/FooterItems'

import AppBar from'@mui/material/AppBar'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListItem from '@mui/material/ListItem';

const Footer = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Box>
          <a href="#top">Scroll to up</a>
        </Box>
        <img src="./images/DH.png" alt='DH-logo' className='img-logo-dh' />
        <ListItem>
          
          <Box>
            {footer.map((item) => (
              <BottomNavigationAction 
                key={item.id} 
                label={item.label} 
                href={item.route} 
                icon={item.Icon} 
              />
            ))}
          </Box>
        </ListItem>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
