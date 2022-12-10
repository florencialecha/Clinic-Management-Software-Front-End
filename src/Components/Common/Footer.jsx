import React from 'react'

import { footer } from '../../Routes/FooterItems'

import AppBar from'@mui/material/AppBar'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Footer = () => {

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Box>
          <Button href="#top">
            <h3>Scroll to up</h3>
          </Button>
        </Box>
        <Toolbar disableGutters>
          <img src="./images/DH.png" alt='DH-logo' className='img-logo-dh' />
        </Toolbar>
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
