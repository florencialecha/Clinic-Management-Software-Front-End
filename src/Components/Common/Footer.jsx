import React from 'react'

import { footer } from '../../Routes/FooterItems'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { red } from '@mui/material/colors';

const Footer = () => {


  return (
    <footer className='theme.footer'>
      <Grid 
        container
        direction='column'
      >
        <Grid item>
          <Grid container 
            width={'100%'}
            justifyContent="center" 
          >
            <Button 
              variant='red-btn'
              href="#top" 
              startIcon={<KeyboardArrowUpIcon fontSize='large'/>}
              endIcon={<KeyboardArrowUpIcon fontSize='large'/>}
            >
              <Typography variant='h5'>
                Scroll to up
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container 
              alignItems='center'
              direction='row'
          >
            <Toolbar disableGutters justifyContent='flex-start' >
              <img src="./images/DH.png" alt='DH-logo' className='img-logo-dh' />
            </Toolbar>
            <ListItem justifyContent='flex-end'>
                {footer.map((item) => (
                  <BottomNavigationAction 
                    key={item.id} 
                    label={item.label} 
                    href={item.route} 
                    icon={item.Icon} 
                  />
                ))}
            </ListItem>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
