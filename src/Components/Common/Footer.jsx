import React from 'react'

import { footer } from '../../Routes/FooterItems'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Stack } from '@mui/system';
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from '@mui/material/Typography';

const Footer = () => {


  return (
    <Stack direction="row" spacing={2} position={'fixed'}>
      <Button 
        variant='red-button'
        href="#top" 
        startIcon={<KeyboardArrowUpIcon fontSize='large'/>}
        endIcon={<KeyboardArrowUpIcon fontSize='large'/>}
      >
        <Typography variant='h5'>
          Scroll to up
        </Typography>
      </Button>
      <Box sx={{backgroundColor: 'primary.main', p: 2}}>
        <Toolbar>
          <img src="./images/DH.png" alt='DH-logo' className='img-logo-dh' style={{width: 200}} />
          <Stack direction="row" spacing={2}>
            {footer.map((item) => (
              <IconButton
                color='secondary'
                key={item.id}
                href={item.route}
              >
                {item.Icon}
              </IconButton>
            ))}
          </Stack>
        </Toolbar>
      </Box>
    </Stack>
  )
}

export default Footer;
